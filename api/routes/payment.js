/* eslint-disable camelcase */
require('dotenv').config()

const axios = require('axios')
const { Router } = require('express')
const mongoose = require('mongoose')
const { YooCheckout } = require('@a2seven/yoo-checkout')
const uuid4 = require('uuid4')
const jwt = require('jsonwebtoken')
const OrderModel = require('../../models/order')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
const UserCouponSchema = require('../../models/userCoupons')
const CouponSchema = require('../../models/coupon')
const router = Router()

const shopId = process.env.YK_SHOP_ID
const secretKey = process.env.YK_API_KEY
const oauthKey = process.env.YK_OAUTH_KEY
const jwtSecretKey = process.env.JWT_SECRET
const baseUrl = process.env.BASE_URL

const checkout = new YooCheckout({ shopId, secretKey, token: oauthKey })

const url = process.env.MONGO_URL
mongoose.connect(url)

function verifyToken (req, res, next) {
  const bearerHeader = req.headers.authorization

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }
}

async function addEmailToRequest (req, res, next) {
  const user = jwt.verify(req.token, jwtSecretKey)
  const query = {
    _id: user.id
  }
  const foundUser = await UsersModel.findOne(query)

  if (foundUser && foundUser.email) {
    req.userEmail = foundUser.email
    req.userId = foundUser.id
    next()
  } else {
    return res.status(404).json({
      status: 'error',
      errorCode: 'USER_NOT_FOUND'
    })
  }
}

router.post('/payment/on-success', async function (req, res) {
  try {
    const { object } = req.body
    console.log('Object from webhook: ', object)
    const orderId = object?.metadata?.orderId

    // Send a response that we got a notification
    res.sendStatus(200)

    if (!orderId) {
      console.error('No metadata -> orderId in object from webhook')
      return
    }

    const order = await OrderModel.findOne({ orderId })
    if (!order.orderId || object.status !== 'succeeded' || !object.paid) {
      console.error('Order is not paid')
      return
    }

    await PurchaseModel.deleteOne({
      courseName: order.productName,
      courseType: order.productType,
      userEmail: order.userEmail
    })

    const startDateMs = Date.now()

    const firstDate = new Date(startDateMs)
    const secondDate = new Date(startDateMs)
    secondDate.setMonth(secondDate.getMonth() + Number(order.accessMonths))
    if (order.accessMonths < 1) {
      secondDate.setDate(secondDate.getDate() + Number(order.accessMonths * 30))
    }
    const difference = secondDate - firstDate

    const endDateMs = startDateMs + difference

    const result = await PurchaseModel.create({
      courseName: order.productName,
      courseType: order.productType,
      userEmail: order.userEmail,
      startDate: startDateMs,
      endDate: endDateMs
    })

    if (order.couponCode) {
      const coupon = await CouponSchema.findOne({ code: order.couponCode })
      if (coupon) {
        console.log('user coupon for user')
        UserCouponSchema.create({
          userId: req.userId,
          couponId: coupon.id
        })
      }
    }

    if (!result) {
      console.error('Something went wrong with creation new purchase')
      return
    }

    return
  } catch (e) {
    console.error(e)
  }
})

;(async function createWebHook () {
  try {
    const idempotenceKey = uuid4()
    const createWebHookPayload = {
      event: 'payment.succeeded',
      url: `${baseUrl}/api/payment/on-success`
    }
    const webhook = await checkout.createWebHook(createWebHookPayload, idempotenceKey)
    console.log('Webhook success', webhook)
  } catch (e) {
    console.error(e)
  }
})()

router.post('/payment/pay', verifyToken, addEmailToRequest, async function (req, res) {
  try {
    const {
      courseName,
      courseType,
      accessMonths,
      amount,
      paymentMessage,
      couponCode
    } = req.body

    if (amount <= 0) {
      const url = `${baseUrl}/api/purchases/add`
      const jsonBody = JSON.stringify({
        courseName,
        courseType,
        accessMonths,
        isFree: true
      })

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          Authorization: `Bearer ${req.token}`,
          email: req.userEmail
        },
        data: jsonBody,
        url
      }
      const courseTypePath = courseType === 'course' ? 'course' : 'single-lesson'
      const instantSuccessUrl = `${baseUrl}/${courseTypePath}/${courseName}`

      axios(options)
        .then((response) => {
          if (response?.data?.status === 'success') {
            return res.status(200).json({
              status: 'success',
              pageUrl: instantSuccessUrl
            })
          }
        })
        .catch((error) => {
          return res.status(500).json({
            status: 'error',
            errorCode: 'SERVER_ERROR',
            error
          })
        })
    } else {
      let successUrl
      if (courseType === 'course') {
        successUrl = `${baseUrl}/course/${courseName}`
      }
      if (courseType === 'singleLesson') {
        successUrl = `${baseUrl}/single-lesson/${courseName}`
      }
      if (courseType === 'file') {
        successUrl = `${baseUrl}/profile`
      }

      const orderId = uuid4()
      const createPayload = {
        amount: {
          value: amount,
          currency: 'RUB'
        },
        description: paymentMessage,
        capture: true,
        metadata: {
          orderId
        },
        confirmation: {
          type: 'redirect',
          return_url: successUrl
        }
      }

      const idempotenceKey = uuid4()
      const payment = await checkout.createPayment(createPayload, idempotenceKey)

      if (payment.id) {
        OrderModel.create({
          orderId,
          userEmail: req.userEmail,
          paymentId: payment.id,
          productType: courseType,
          productName: courseName,
          couponCode,
          accessMonths
        })

        return res.status(301).json({
          status: 'redirect',
          url: payment.confirmation.confirmation_url
        })
      }

      return res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/payment/check', verifyToken, addEmailToRequest, async function (req, res) {
  try {
    const { orderId } = req.body

    const order = await OrderModel.findOne({ orderId })
    if (!order.orderId) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'ORDER_NOT_FOUND'
      })
    }

    let successUrl
    if (order.productType === 'course') {
      successUrl = `${baseUrl}/course/${order.productName}`
    }
    if (order.productType === 'singleLesson') {
      successUrl = `${baseUrl}/single-lesson/${order.productName}`
    }
    if (order.productType === 'file') {
      successUrl = `${baseUrl}/profile`
    }

    const payment = await checkout.getPayment(order.paymentId)

    if (payment.status !== 'succeeded' || !payment.paid) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'PAYMENT_NOT_VALID'
      })
    }

    const url = `${baseUrl}/api/purchases/add`
    const jsonBody = JSON.stringify({
      courseName: order.productName,
      courseType: order.productType,
      accessMonths: order.accessMonths,
      paymentRequestId: order.paymentId
    })

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
        Authorization: `Bearer ${req.token}`,
        email: req.userEmail
      },
      data: jsonBody,
      url
    }

    axios(options)
      .then(async (response) => {
        if (response?.data?.status === 'success') {
          if (order.couponCode) {
            const coupon = await CouponSchema.findOne({ code: order.couponCode })
            if (coupon) {
              console.log('user coupon for user')
              UserCouponSchema.create({
                userId: req.userId,
                couponId: coupon.id
              })
            }
          }

          return res.status(200).json({
            status: 'success',
            pageUrl: successUrl
          })
        }
      })
      .catch((error) => {
        if (error.response.data?.status === 'error') {
          return res.status(404).json(error.response.data)
        }
        throw new Error('Add purchase error')
      })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
