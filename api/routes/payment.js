/* eslint-disable camelcase */
require('dotenv').config()

const axios = require('axios')
const { Router } = require('express')
const mongoose = require('mongoose')
const yandexMoney = require('yandex-money-sdk')
const router = Router()

const clientId = process.env.CLIENT_ID_YM
const walletNumber = process.env.YM_WALLET
const baseUrl = process.env.BASE_URL

const url = process.env.MONGO_URL
mongoose.connect(url)

router.post('/payment/pay', function (req, res) {
  try {
    const {
      userEmail,
      paymentMessage,
      token,
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

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
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
      } catch (error) {
        return res.status(500).json({
          status: 'error',
          errorCode: 'SERVER_ERROR'
        })
      }
    } else {
      let requestId = null

      async function createPayment (paymentInfo, successUrl, callback) {
        let instanceId = null
        let error = null

        await yandexMoney.ExternalPayment.getInstanceId(
          clientId,
          async function getInstanceComplete (err, data) {
            if (err) {
              console.error(err)
              error = new Error('Get instance_id failed.')
              throw error
            }

            instanceId = data.instance_id

            const externalPayment = new yandexMoney.ExternalPayment(instanceId)

            // Pay options : sum info
            const options = {
              ...paymentInfo,
              message: paymentInfo.paymentMessage,
              pattern_id: 'p2p',
              to: walletNumber
            }

            await externalPayment.request(
              options,
              async function requestComplete (err, data) {
                try {
                  if (err) {
                    console.error(err)
                    error = Error('Get request_id failed.')
                    throw error
                  }
                  requestId = data.request_id

                  await externalPayment.process(
                    {
                      request_id: requestId,
                      ext_auth_success_uri: `${successUrl}/?request_id=${requestId}&email=${userEmail}&course_type=${courseType}&course_name=${courseName}&access_months=${accessMonths}`,
                      ext_auth_fail_uri: paymentInfo.baseUrl.concat('/error-payment')
                    },
                    function processCallback (err, data) {
                      if (err) {
                        console.error(err)
                        error = new Error('Get acs_url failed.')
                        throw error
                      } else {
                        console.warn('processCallbackData', data)
                        callback(data)
                      }
                    }
                  )
                } catch (error) {
                  return res.status(500).json({
                    status: 'error',
                    errorCode: 'SERVER_ERROR',
                    error
                  })
                }
              }
            )
          }
        )
      }

      function paymentCallback (paymentProcessData) {
        if (paymentProcessData.status === 'ext_auth_required') {
          const { acs_uri, acs_params } = paymentProcessData
          res.status(301).json({
            status: 'redirect',
            url: `${acs_uri}?orderId=${acs_params.orderId}`
          })
        } else if (paymentProcessData.status === 'success') {
          const url = `${baseUrl}/api/purchases/add`
          const jsonBody = JSON.stringify({
            courseName,
            courseType,
            accessMonths,
            paymentRequestId: requestId
          })

          try {
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
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
                throw new Error(error)
              })
          } catch (error) {
            return res.status(500).json({
              status: 'error',
              errorCode: 'SERVER_ERROR'
            })
          }
        } else if (paymentProcessData.status === 'refused') {
          throw new Error(paymentProcessData.error)
        }
      }

      const successUrl = `${baseUrl}/success-payment`

      createPayment(
        { amount, paymentMessage, baseUrl },
        successUrl,
        paymentCallback
      )
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/payment/check', function (req, res) {
  try {
    const {
      userEmail,
      token,
      courseName,
      courseType,
      accessMonths,
      requestId
    } = req.body

    async function checkPayment (paymentInfo, successUrl, callback) {
      let instanceId = null
      let error = null

      await yandexMoney.ExternalPayment.getInstanceId(
        clientId,
        async function getInstanceComplete (err, data) {
          try {
            if (err) {
              console.error(err)
              error = new Error('Get instance_id failed.')
              throw error
            }

            instanceId = data.instance_id

            const externalPayment = new yandexMoney.ExternalPayment(instanceId)

            await externalPayment.process(
              {
                request_id: requestId,
                ext_auth_success_uri: `${successUrl}`,
                ext_auth_fail_uri: paymentInfo.baseUrl.concat('/error-payment')
              },
              function processCallback (err, data) {
                if (err) {
                  console.error(err)
                  error = new Error('Get acs_url failed.')
                  throw error
                } else {
                  console.warn('processCallbackData', data)
                  callback(data)
                }
              }
            )
          } catch (error) {
            return res.status(500).json({
              status: 'error',
              errorCode: 'SERVER_ERROR',
              error
            })
          }
        }
      )
    }

    function paymentCallback (paymentProcessData) {
      if (paymentProcessData.status === 'ext_auth_required') {
        const { acs_uri, acs_params } = paymentProcessData
        res.status(301).json({
          status: 'redirect',
          url: `${acs_uri}?orderId=${acs_params.orderId}`
        })
      } else if (paymentProcessData.status === 'success') {
        const url = `${baseUrl}/api/purchases/add`
        const jsonBody = JSON.stringify({
          courseName,
          courseType,
          accessMonths,
          paymentRequestId: requestId
        })

        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
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
      } else if (paymentProcessData.status === 'refused') {
        throw new Error(paymentProcessData.error)
      }
    }

    const courseTypePath = courseType === 'course' ? 'course' : 'single-lesson'
    const successUrl = `${baseUrl}/${courseTypePath}/${courseName}`

    checkPayment(
      { baseUrl },
      successUrl,
      paymentCallback
    )
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

const addFilePurchase = (payload) => {
  const {
    response,
    userEmail,
    token,
    lessonName,
    lessonType,
    fileName,
    successUrl,
    accessMonths,
    paymentRequestId
  } = payload
  const url = `${baseUrl}/api/purchases/add-file`
  const jsonBody = JSON.stringify({
    lessonName,
    lessonType,
    fileName,
    accessMonths,
    paymentRequestId
  })

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        email: userEmail
      },
      data: jsonBody,
      url
    }

    axios(options)
      .then((resp) => {
        if (resp?.data?.status === 'success') {
          return response.status(200).json({
            status: 'success',
            pageUrl: successUrl
          })
        }
      })
      .catch((error) => {
        throw new Error(error)
      })
  } catch (error) {
    return response.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
}

router.post('/payment/pay-file', function (req, res) {
  try {
    const {
      userEmail,
      paymentMessage,
      token,
      lessonName,
      lessonType,
      fileName,
      accessMonths,
      amount
    } = req.body

    let requestId = null

    async function createPayment (paymentInfo, successUrl, callback) {
      let instanceId = null
      let error = null

      await yandexMoney.ExternalPayment.getInstanceId(
        clientId,
        async function getInstanceComplete (err, data) {
          try {
            if (err) {
              console.error(err)
              error = new Error('Get instance_id failed.')
              throw error
            }

            instanceId = data.instance_id

            const externalPayment = new yandexMoney.ExternalPayment(instanceId)

            // Pay options : sum info
            const options = {
              ...paymentInfo,
              message: paymentInfo.paymentMessage,
              pattern_id: 'p2p',
              to: walletNumber
            }

            await externalPayment.request(
              options,
              async function requestComplete (err, data) {
                if (err) {
                  console.error(err)
                  error = Error('Get request_id failed.')
                  throw error
                }
                requestId = data.request_id

                await externalPayment.process(
                  {
                    request_id: requestId,
                    ext_auth_success_uri: `${successUrl}/?request_id=${requestId}&email=${userEmail}&lesson_type=${lessonType}&lesson_name=${lessonName}&file_name=${fileName}&access_months=${accessMonths}`,
                    ext_auth_fail_uri: paymentInfo.baseUrl.concat('/error-payment')
                  },
                  function processCallback (err, data) {
                    if (err) {
                      console.error(err)
                      error = new Error('Get acs_url failed.')
                      throw error
                    } else {
                      console.warn('processCallbackData', data)
                      callback(data)
                    }
                  }
                )
              }
            )
          } catch (error) {
            return res.status(500).json({
              status: 'error',
              errorCode: 'SERVER_ERROR',
              error
            })
          }
        }
      )
    }

    function paymentCallback (paymentProcessData) {
      if (paymentProcessData.status === 'ext_auth_required') {
        const { acs_uri, acs_params } = paymentProcessData
        res.status(301).json({
          status: 'redirect',
          url: `${acs_uri}?orderId=${acs_params.orderId}`
        })
      } else if (paymentProcessData.status === 'success') {
        addFilePurchase({
          response: res,
          userEmail,
          token,
          lessonName,
          lessonType,
          successUrl,
          fileName,
          accessMonths,
          paymentRequestId: requestId
        })
      } else if (paymentProcessData.status === 'refused') {
        throw new Error(paymentProcessData.error)
      }
    }

    const successUrl = `${baseUrl}/success-payment`

    createPayment(
      { amount, paymentMessage, baseUrl },
      successUrl,
      paymentCallback
    )
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/payment/check-file', function (req, res) {
  try {
    const {
      userEmail,
      token,
      lessonName,
      lessonType,
      fileName,
      accessMonths,
      requestId
    } = req.body

    async function checkPayment (paymentInfo, successUrl, callback) {
      let instanceId = null
      let error = null

      await yandexMoney.ExternalPayment.getInstanceId(
        clientId,
        async function getInstanceComplete (err, data) {
          try {
            if (err) {
              console.error(err)
              error = new Error('Get instance_id failed.')
              throw error
            }

            instanceId = data.instance_id

            const externalPayment = new yandexMoney.ExternalPayment(instanceId)

            await externalPayment.process(
              {
                request_id: requestId,
                ext_auth_success_uri: `${successUrl}`,
                ext_auth_fail_uri: paymentInfo.baseUrl.concat('/error-payment')
              },
              function processCallback (err, data) {
                if (err) {
                  console.error(err)
                  error = new Error('Get acs_url failed.')
                  throw error
                } else {
                  console.warn('processCallbackData', data)
                  callback(data)
                }
              }
            )
          } catch (error) {
            return res.status(500).json({
              status: 'error',
              errorCode: 'SERVER_ERROR',
              error
            })
          }
        }
      )
    }

    function paymentCallback (paymentProcessData) {
      if (paymentProcessData.status === 'ext_auth_required') {
        const { acs_uri, acs_params } = paymentProcessData
        res.status(301).json({
          status: 'redirect',
          url: `${acs_uri}?orderId=${acs_params.orderId}`
        })
      } else if (paymentProcessData.status === 'success') {
        addFilePurchase({
          response: res,
          userEmail,
          token,
          lessonName,
          lessonType,
          successUrl,
          fileName,
          accessMonths,
          paymentRequestId: requestId
        })
      } else if (paymentProcessData.status === 'refused') {
        throw new Error(paymentProcessData.error)
      }
    }

    const lessonTypePath = lessonType === 'lesson' ? 'lesson' : 'single-lesson'
    const successUrl = `${baseUrl}/${lessonTypePath}/${lessonName}`

    checkPayment(
      { baseUrl },
      successUrl,
      paymentCallback
    )
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
