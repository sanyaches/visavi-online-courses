require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const PurchaseModel = require('../../models/purchase')
const FilePurchaseModel = require('../../models/filePurchase')
const FileModel = require('../../models/file')
const PaymentModel = require('../../models/payment')
const { sendEmail } = require('../sendEmail.js')
const router = Router()

const jwtSecretKey = process.env.JWT_SECRET

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

function verifyAdminToken (req, res, next) {
  const user = jwt.verify(req.token, jwtSecretKey)

  if (user.isAdmin) {
    next()
  } else {
    res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }
}

router.post('/purchases/add', verifyToken, async function (req, res) {
  try {
    const {
      courseName,
      courseType,
      accessMonths,
      paymentRequestId,
      isFree = false
    } = req.body
    const userEmail = req.headers.email

    await PurchaseModel.deleteOne({ courseName, courseType, userEmail })

    const startDateMs = Date.now()

    const firstDate = new Date(startDateMs)
    const secondDate = new Date(startDateMs)
    secondDate.setMonth(secondDate.getMonth() + Number(accessMonths))
    if (accessMonths < 1) {
      secondDate.setDate(secondDate.getDate() + Number(accessMonths * 30))
    }
    const difference = secondDate - firstDate

    const endDateMs = startDateMs + difference

    if (!isFree) {
      const paymentResult = await PaymentModel.create({
        paymentRequestId
      })

      if (!paymentResult) {
        throw new Error('Payment create server error')
      }
    }

    const result = await PurchaseModel.create({
      courseName,
      courseType,
      userEmail,
      startDate: startDateMs,
      endDate: endDateMs
    })

    if (!result) {
      throw new Error('Purchase create server error')
    }

    res.status(200).json({
      status: 'success',
      purchase: {
        courseName: result.courseName,
        courseType: result.courseType,
        userEmail: result.userEmail,
        startDate: result.startDate,
        endDate: result.endDate
      }
    })

    sendEmail(`
      <h1>У нас покупочка!</h1>
      <div>
        Кто-то купил на сайте, ура!
      </div>
      <p>Тип урока: ${result.courseType}</p>
      <p>Имя урока: ${result.courseName}</p>
      <p>Почта  пользователя: ${result.userEmail}</p>
      <p>Месяцев доступа: ${accessMonths}</p>
    `, {
      toEmail: 'vi.kosto@yandex.ru',
      subject: 'Новая покупка на сайте www.vikosto.net'
    })
  } catch (error) {
    if (error.errors) {
      res.status(404).json({
        status: 'error',
        errorCode: 'VALIDATION_ERROR'
      })
      return
    }

    if (error.code === 11000) {
      res.status(404).json({
        status: 'error',
        errorCode: 'PAYMENT_REQUEST_ID_WAS_REPEATED'
      })
      return
    }

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/purchases/add-file', verifyToken, async function (req, res) {
  try {
    const {
      lessonName,
      lessonType,
      fileName,
      accessMonths,
      paymentRequestId
    } = req.body
    const userEmail = req.headers.email

    await FilePurchaseModel.deleteOne({ lessonName, lessonType, fileName, userEmail })

    const startDateMs = Date.now()

    const firstDate = new Date(startDateMs)
    const secondDate = new Date(startDateMs)
    secondDate.setMonth(secondDate.getMonth() + Number(accessMonths))
    const difference = secondDate - firstDate

    const endDateMs = startDateMs + difference

    const paymentResult = await PaymentModel.create({
      paymentRequestId
    })

    if (!paymentResult) {
      throw new Error('Payment create server error')
    }

    const result = await FilePurchaseModel.create({
      lessonName,
      lessonType,
      fileName,
      userEmail,
      startDate: startDateMs,
      endDate: endDateMs
    })

    if (!result) {
      throw new Error('Purchase create server error')
    }

    res.status(200).json({
      status: 'success',
      purchase: {
        courseName: result.courseName,
        courseType: result.courseType,
        userEmail: result.userEmail,
        startDate: result.startDate,
        endDate: result.endDate
      }
    })

    sendEmail(`
      <h1>У нас покупочка файла!</h1>
      <div>
        Кто-то купил на сайте, ура!
      </div>
      <p>Тип урока: ${result.lessonType}</p>
      <p>Имя урока: ${result.lessonName}</p>
      <p>Имя файла: ${result.fileName}</p>
      <p>Почта  пользователя: ${result.userEmail}</p>
      <p>Месяцев доступа: ${accessMonths}</p>
    `, {
      toEmail: 'vi.kosto@yandex.ru',
      subject: 'Новая покупка на сайте www.vikosto.net'
    })
  } catch (error) {
    if (error.errors) {
      res.status(404).json({
        status: 'error',
        errorCode: 'VALIDATION_ERROR'
      })
      return
    }

    if (error.code === 11000) {
      res.status(404).json({
        status: 'error',
        errorCode: 'PAYMENT_REQUEST_ID_WAS_REPEATED'
      })
      return
    }

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/purchases/purchases-by-user', verifyToken, async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 1000
    const offset = parseInt(req.query.offset, 10) || 0
    const userEmail = req.headers.email

    const result = await PurchaseModel.find({ userEmail })
      .limit(limit)
      .skip(offset)
      .exec()
    const resultFilesPurchases = await FilePurchaseModel.find({ userEmail })
      .limit(limit)
      .skip(offset)
      .exec()

    const files = await FileModel.find()
      .limit(limit)
      .skip(offset)
      .exec()
    const filesDict = {}
    for (const file of files) {
      filesDict[file.name] = file
    }

    if (!result || !resultFilesPurchases) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: [
        ...result.map((purchase) => {
          if (purchase.courseType !== 'file') {
            return purchase
          }
          return {
            ...purchase,
            courseType: 'file',
            resourceUrl: filesDict[purchase.courseName].resourceUrl,
            name: filesDict[purchase.courseName].name,
            title: filesDict[purchase.courseName].title
          }
        }),
        ...resultFilesPurchases.map((file) => {
          return {
            ...file,
            courseType: 'file',
            resourceUrl: filesDict[file.fileName].resourceUrl,
            name: filesDict[file.fileName].name,
            title: filesDict[file.fileName].title
          }
        })
      ]
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/purchases/list', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 1000
    const offset = parseInt(req.query.offset, 10) || 0

    const result = await PurchaseModel.find()
      .sort({ startDate: 'asc' })
      .limit(limit)
      .skip(offset)
      .exec()

    if (!result) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      purchases: result
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
