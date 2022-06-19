require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
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

async function verifyUserToken (req, res, next) {
  if (!req.token) {
    return res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }

  const user = jwt.verify(req.token, jwtSecretKey)
  const query = {
    _id: user.id
  }

  const userResult = await UsersModel.findOne(query)
  const userEmail = req.headers.email

  if (userResult.email !== userEmail) {
    return res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }

  req.email = userEmail
  next()
}

router.post('/purchases/add', verifyToken, verifyUserToken, async function (req, res) {
  try {
    const {
      courseName,
      courseType,
      accessMonths
    } = req.body
    const userEmail = req.email

    await PurchaseModel.deleteOne({ courseName, courseType, userEmail })

    const startDateMs = Date.now()

    const firstDate = new Date(startDateMs)
    const secondDate = new Date(startDateMs)
    secondDate.setMonth(secondDate.getMonth() + Number(accessMonths))
    const difference = secondDate - firstDate

    const endDateMs = startDateMs + difference

    const result = await PurchaseModel.create({
      courseName,
      courseType,
      userEmail,
      startDate: startDateMs,
      endDate: endDateMs
    })

    if (!result) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
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

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/purchases/purchases-by-user', verifyToken, verifyUserToken, async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 1000
    const offset = parseInt(req.query.offset, 10) || 0
    const userEmail = req.email

    const result = await PurchaseModel.find({ userEmail })
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
      data: result
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
