/* eslint-disable camelcase */
require('dotenv').config()

const axios = require('axios')
const { Router } = require('express')
const mongoose = require('mongoose')
const { YooCheckout } = require('@a2seven/yoo-checkout')
const uuid4 = require('uuid4')
const OrderModel = require('../../models/order')
const router = Router()

const shopId = process.env.YK_SHOP_ID
const secretKey = process.env.YK_API_KEY
const idempotenceKey = '1872542f-fce3-46ed-8239-ccb505701076'
const baseUrl = process.env.BASE_URL

const checkout = new YooCheckout({ shopId, secretKey })

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

router.post('/payment/pay', verifyToken, async function (req, res) {
  try {
    const {
      userEmail,
      paymentMessage,
      courseName,
      courseType,
      accessMonths,
      amount
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
          email: userEmail
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
      const orderId = uuid4()
      const successUrl = `${baseUrl}/success-payment?orderId=${orderId}`
      const createPayload = {
        amount: {
          value: amount,
          currency: 'RUB'
        },
        description: paymentMessage,
        metadata: {
          orderId
        },
        confirmation: {
          type: 'redirect',
          return_url: successUrl
        }
      }

      const payment = await checkout.createPayment(createPayload, idempotenceKey)

      if (payment.id) {
        OrderModel.create({
          orderId,
          paymentId: payment.id,
          productType: courseType,
          productName: courseName,
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

router.post('/payment/check', verifyToken, async function (req, res) {
  try {
    const {
      orderId,
      userEmail
    } = req.body

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
        email: userEmail
      },
      data: jsonBody,
      url
    }

    axios(options)
      .then((response) => {
        if (response?.data?.status === 'success') {
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
