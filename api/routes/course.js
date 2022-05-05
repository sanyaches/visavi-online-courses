require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const CourseModel = require('../../models/course')
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

router.post('/course/add', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const { name, title, description, imageUrl = 'upload/example-image.png', price, pricePlus } = req.body

    const result = await CourseModel.create({ name, title, description, imageUrl, price, pricePlus })
    console.log('Result: ', result)
    if (!result) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }
    res.status(200).json({
      status: 'success',
      course: {
        name: result.name,
        title: result.title,
        description: result.description,
        imageUrl: result.imageUrl,
        price: result.price,
        pricePlus: result.pricePlus,
        lessonIds: result.lessonIds
      }
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
        errorCode: 'COURSE_ALREADY_EXISTS'
      })
      return
    }

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/course/list', async function (req, res) {
  try {
    const { limit = 10, offset = 0 } = req.params

    const result = await CourseModel.find()
      .limit(limit)
      .skip(offset)
      .exec()

    console.log('Result: ', result)
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
        errorCode: 'COURSE_ALREADY_EXISTS'
      })
      return
    }

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
