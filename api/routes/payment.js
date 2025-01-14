/* eslint-disable camelcase */
require('dotenv').config()

const axios = require('axios')
const { Router } = require('express')
const mongoose = require('mongoose')
const { YooCheckout } = require('@a2seven/yoo-checkout')
const payture = require('payture-official')
const { Convert } = require('easy-currencies')
const uuid4 = require('uuid4')
const jwt = require('jsonwebtoken')
const OrderModel = require('../../models/order')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
// const UserCouponSchema = require('../../models/userCoupons')
const CouponSchema = require('../../models/coupon')
const { sendEmail } = require('../sendEmail.js')
const router = Router()

const shopId = process.env.YK_SHOP_ID
const secretKey = process.env.YK_API_KEY
const oauthKey = process.env.YK_OAUTH_KEY
const jwtSecretKey = process.env.JWT_SECRET
const paytureHost = process.env.PAYTURE_HOST
const paytureKey = process.env.PAYTURE_API_KEY
const paytureSecret = process.env.PAYTURE_API_SECRET
const baseUrl = process.env.BASE_URL
const tinkoffShopId = process.env.TINKOFF_SHOP_ID
const tinkoffShowcaseId = process.env.TINKOFF_SHOWCASE_ID
const tinkoffAPIBaseUrl = 'https://forma.tinkoff.ru/api/partners/v2/orders/'

const checkout = new YooCheckout({ shopId, secretKey, token: oauthKey })
const paytureInPay = payture.InPay(paytureHost, { Key: paytureKey, Password: paytureSecret })

const PaymentMethodDict = {
  YooMoney: 'yoomoney',
  Payture: 'payture',
  PayPal: 'paypal',
  Tinkoff: 'tinkoff'
}

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

router.post('/payment/paypal-success', async function (req, res) {
  try {
    const { product } = req.body

    await PurchaseModel.deleteOne({
      courseName: product.courseName,
      courseType: product.courseType,
      userEmail: product.userEmail
    })

    const startDateMs = Date.now()

    const firstDate = new Date(startDateMs)
    const secondDate = new Date(startDateMs)
    secondDate.setMonth(secondDate.getMonth() + Number(product.accessMonths))
    if (product.accessMonths < 1) {
      secondDate.setDate(secondDate.getDate() + Number(product.accessMonths * 30))
    }
    const difference = secondDate - firstDate

    const endDateMs = startDateMs + difference

    const result = await PurchaseModel.create({
      courseName: product.courseName,
      courseType: product.courseType,
      userEmail: product.userEmail,
      startDate: startDateMs,
      endDate: endDateMs
    })

    if (result) {
      sendEmail(`
        <h1>У нас покупочка через Paypal!</h1>
        <div>
          Кто-то купил на сайте, ура!
        </div>
        <p>Тип урока: ${product.courseType}</p>
        <p>Имя урока: ${product.courseName}</p>
        <p>Почта  пользователя: ${product.userEmail}</p>
        <p>Месяцев доступа: ${product.accessMonths}</p>
      `, {
        toEmail: 'vi.kosto@yandex.ru',
        subject: 'Новая покупка на сайте vikosto.net'
      })
      res.status(200).json({
        status: 'success'
      })
    }

    if (!result) {
      console.error('Something went wrong with creation new purchase')
      return
    }

    return
  } catch (e) {
    console.error(e)
    res.send(500).json({ error: e })
  }
})

router.post('/payment/paypal-paid', function (req, res) {
  try {
    const { name, email, description } = req.body

    sendEmail(`
      <h1>У нас оплата через Paypal!</h1>
      <p>Имя: ${name}</p>
      <p>Почта  пользователя: ${email}</p>
      <p>Описание: ${description}</p>
    `, {
      toEmail: 'vi.kosto@yandex.ru',
      subject: 'Новая покупка на сайте vikosto.net'
    })

    res.status(200).json({
      status: 'success'
    })

    return
  } catch (e) {
    console.error(e)
    res.send(500).json({ error: e })
  }
})

router.post('/payment/on-success', async function (req, res) {
  try {
    const { object } = req.body
    console.log('Object from webhook: ', object)

    if (object?.metadata?.guide) {
      sendEmail(`
        <h1>У нас покупочка!</h1>
        <div>
          Кто-то купил на сайте ГАЙД, ура!
        </div>
        <p>Почта  пользователя: ${object?.metadata?.email}</p>
        <p>Имя пользователя: ${object?.metadata?.name}</p>
        <p>Гайд: ${object?.metadata?.guide}</p>
      `, {
        toEmail: 'vi.kosto@yandex.ru',
        subject: 'Гайд: новая покупка на сайте www.vikosto.net'
      })

      res.sendStatus(200)

      return
    } else if (object?.metadata?.course || req.body?.status === 'approved') {
      const loan = req.body?.status === 'approved' ? 'В кредит' : 'Нет'
      const meta = object?.metadata || req.body.meta

      sendEmail(`
        <h1>У нас покупочка!</h1>
        <div>
          Кто-то оплатил на сайте курс, ура!
        </div>
        <p>Почта  пользователя: ${meta.email}</p>
        <p>Имя пользователя: ${meta.name}</p>
        <p>Курс: ${meta.course}</p>
        <p>В кредит: ${loan}</p>
      `, {
        toEmail: 'vi.kosto@yandex.ru',
        subject: 'Курс: новая покупка на сайте www.vikosto.net'
      })

      res.sendStatus(200)

      return
    }

    const orderId = object?.metadata?.orderId

    // Send a response that we got a notification
    res.sendStatus(200)

    if (!orderId) {
      console.error('No metadata -> orderId in object from webhook')
      return
    }

    const order = await OrderModel.findOne({ orderId })
    if (!order || !order.orderId || object.status !== 'succeeded' || !object.paid) {
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

    if (result) {
      sendEmail(`
        <h1>У нас покупочка!</h1>
        <div>
          Кто-то купил на сайте, ура!
        </div>
        <p>Тип урока: ${order.productType}</p>
        <p>Имя урока: ${order.productName}</p>
        <p>Почта  пользователя: ${order.userEmail}</p>
        <p>Месяцев доступа: ${order.accessMonths}</p>
        <p>Промокод: ${order.couponCode || '---'}</p>
        <p>Сумма: ${object.amount.value} ${object.amount.currency}</p>
      `, {
        toEmail: 'vi.kosto@yandex.ru',
        subject: 'Новая покупка на сайте www.vikosto.net'
      })
    }

    if (order.couponCode) {
      const coupon = await CouponSchema.findOne({ code: order.couponCode })
      if (coupon) {
        console.log('user coupon for user')
        // UserCouponSchema.create({
        //   userId: req.userId,
        //   couponId: coupon.id
        // })
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
    const webhooks = await checkout.getWebHookList()
    if (webhooks.items.findIndex((wh) => {
      return (wh.event === 'payment.succeeded' && wh.url === `${baseUrl}/api/payment/on-success`)
    }) !== -1) {
      console.log('[PAYMENT] Success payment webhook is already exists')
      return
    }

    const idempotenceKey = uuid4()
    const createWebHookPayload = {
      event: 'payment.succeeded',
      url: `${baseUrl}/api/payment/on-success`
    }
    const webhook = await checkout.createWebHook(createWebHookPayload, idempotenceKey)
    console.log('Webhook success', webhook)
  } catch (e) {
    console.error('Webhook creation problem')
  }
})()

router.post('/payment/pay', verifyToken, addEmailToRequest, async function (req, res) {
  try {
    const {
      courseName,
      courseType,
      accessMonths,
      amount,
      currency,
      paymentMessage,
      couponCode,
      platform = 'RU'
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

      const onSuccess = (id, url) => {
        if (id && url) {
          OrderModel.create({
            orderId,
            userEmail: req.userEmail,
            paymentId: id,
            platform,
            productType: courseType,
            productName: courseName,
            couponCode,
            accessMonths
          })

          return res.status(301).json({
            status: 'redirect',
            url
          })
        }
      }

      const onError = () => {
        return res.status(500).json({
          status: 'error',
          errorCode: 'SERVER_ERROR'
        })
      }

      const orderId = uuid4()
      if (platform === 'RU') {
        const createPayload = {
          amount: {
            value: amount,
            currency
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

        if (payment.id && payment.confirmation.confirmation_url) {
          onSuccess(payment.id, payment.confirmation.confirmation_url)
        }
      } else if (platform === 'EN' || currency === 'USD') {
        const data = {
          OrderId: orderId,
          Amount: amount * 100, // In cents
          Total: amount,
          Description: paymentMessage,
          SessionType: 'Pay',
          Url: `${baseUrl}/success-payment?orderId={orderid}`
        }

        paytureInPay.init(data, (error, response, body, responseObject) => {
          if (error) {
            return onError()
          }

          if (responseObject.Success === 'True' && responseObject.SessionId) {
            return onSuccess(responseObject.SessionId, `${paytureHost}apim/Pay?SessionId=${responseObject.SessionId}`)
          }

          return onError()
        })
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/payment/pay-guide', async function (req, res) {
  try {
    const {
      message,
      method,
      email,
      name,
      guide
    } = req.body
    const amountRub = 990
    const value = await Convert(amountRub).from('RUB').to('USD')
    const amountUsd = parseFloat(value.toFixed(2))

    const successUrl = `${baseUrl}/thanks-guide`
    const orderId = uuid4()

    const redirectToUrl = (url) => {
      return res.status(301).json({
        status: 'redirect',
        url
      })
    }

    const onError = () => {
      return res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
    }

    if (method === PaymentMethodDict.YooMoney) {
      const createPayload = {
        amount: {
          value: amountRub,
          currency: 'RUB'
        },
        description: message,
        metadata: {
          email,
          name,
          guide
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: successUrl
        }
      }
      const idempotenceKey = uuid4()
      const payment = await checkout.createPayment(createPayload, idempotenceKey)

      if (payment.id && payment.confirmation.confirmation_url) {
        redirectToUrl(payment.confirmation.confirmation_url)
      }
    } else if (method === PaymentMethodDict.Payture) {
      const data = {
        OrderId: orderId,
        Amount: amountUsd * 100, // In cents
        Total: amountUsd,
        Description: message,
        SessionType: 'Pay',
        Url: successUrl,
        CustomerEmail: email,
        CustomerName: name,
        TypeOfGuide: guide
      }

      paytureInPay.init(data, (error, response, body, responseObject) => {
        if (error) {
          return onError()
        }

        if (responseObject.Success === 'True' && responseObject.SessionId) {
          return redirectToUrl(`${paytureHost}apim/Pay?SessionId=${responseObject.SessionId}`)
        }

        return onError()
      })
    } else {
      return res.status(400).json({
        status: 'error',
        errorCode: 'BAD_REQUEST'
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/payment/pay-course', async function (req, res) {
  try {
    const {
      message,
      method,
      email,
      name,
      amount,
      course
    } = req.body

    const successUrl = `${baseUrl}/success-payment`

    const redirectToUrl = (url) => {
      return res.status(301).json({
        status: 'redirect',
        url
      })
    }

    const onError = () => {
      return res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
    }

    if (method === PaymentMethodDict.YooMoney) {
      const createPayload = {
        amount: {
          value: amount,
          currency: 'RUB'
        },
        description: message,
        metadata: {
          email,
          name,
          course
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: successUrl
        }
      }
      const idempotenceKey = uuid4()
      const payment = await checkout.createPayment(createPayload, idempotenceKey)

      if (payment.id && payment.confirmation.confirmation_url) {
        redirectToUrl(payment.confirmation.confirmation_url)
      }
    } else if (method === PaymentMethodDict.Tinkoff) {
      const url = tinkoffAPIBaseUrl + 'create' // 'create-demo' - for demo
      const jsonBody = JSON.stringify({
        shopId: tinkoffShopId,
        showcaseId: tinkoffShowcaseId,
        items: [
          { name: course, price: amount, quantity: 1 }
        ],
        sum: amount,
        values: {
          contact: {
            email
          }
        },
        meta: {
          name,
          email,
          course
        }
      })

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json'
        },
        data: jsonBody,
        url
      }

      axios(options)
        .then((response) => {
          if (response?.status === 200) {
            const paymentLink = response?.data?.link
            return redirectToUrl(paymentLink)
          }
          onError()
        })
        .catch((error) => {
          return res.status(500).json({
            status: 'error',
            errorCode: 'SERVER_ERROR',
            error
          })
        })
    } else {
      return res.status(400).json({
        status: 'error',
        errorCode: 'BAD_REQUEST'
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

const onCheckSuccess = (req, res, order, successUrl) => {
  try {
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
            // UserCouponSchema.create({
            //   userId: req.userId,
            //   couponId: coupon.id
            // })
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
  } catch (e) {
    console.error('[Error - onCheckSuccess]', e)
  }
}

const onCheckError = (res) => {
  return res.status(500).json({
    status: 'error',
    errorCode: 'SERVER_ERROR'
  })
}

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

    if (order.platform === 'EN') {
      paytureInPay.payStatus(orderId, (error, response, body, responseObject) => {
        if (error) {
          return onCheckError(res)
        }

        if (responseObject.Success === 'True' && responseObject.State === 'Charged') {
          return onCheckSuccess(req, res, order, successUrl)
        }

        return onCheckError(res)
      })
    } else {
      const payment = await checkout.getPayment(order.paymentId)

      if (payment.status !== 'succeeded' || !payment.paid) {
        return res.status(404).json({
          status: 'error',
          errorCode: 'PAYMENT_NOT_VALID'
        })
      }

      return onCheckSuccess(req, res, order, successUrl)
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
