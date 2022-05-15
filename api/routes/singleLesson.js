require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SingleLessonModel = require('../../models/singleLesson')
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

router.post('/single-lesson/add', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      description,
      videoUrl = '/api/videos/example.mp4',
      promoUrl = '/api/videos/example.mp4',
      thumbnailUrl = '/api/upload/example-image.png',
      presentationUrl = '/api/upload/example-image.png',
      duration,
      price
    } = req.body

    const result = await SingleLessonModel.create({
      name,
      title,
      description,
      videoUrl,
      promoUrl,
      presentationUrl,
      duration,
      thumbnailUrl,
      price
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
      singleLesson: {
        name: result.name,
        title: result.title,
        description: result.description,
        videoUrl: result.videoUrl,
        promoUrl: result.promoUrl,
        presentationUrl: result.presentationUrl,
        thumbnailUrl: result.thumbnailUrl,
        duration: result.duration,
        price: result.price
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
        errorCode: 'LESSON_ALREADY_EXISTS'
      })
      return
    }

    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/single-lesson/edit', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      description,
      videoUrl = '/api/videos/example.mp4',
      promoUrl = '/api/videos/example.mp4',
      thumbnailUrl = '/api/upload/example-image.png',
      presentationUrl = '/api/upload/example-image.png',
      duration,
      price
    } = req.body

    const result = await SingleLessonModel.updateOne({ name }, {
      title,
      description,
      videoUrl,
      thumbnailUrl,
      presentationUrl,
      promoUrl,
      duration,
      price
    })

    if (!result) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success'
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

router.post('/single-lesson/delete', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const { name } = req.body

    const result = await SingleLessonModel.deleteOne({ name })

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'LESSON_NOT_FOUND'
      })
      return
    }

    res.status(200).json({
      status: 'success'
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/single-lesson/list', async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 10
    const offset = parseInt(req.query.offset, 10) || 0

    const result = await SingleLessonModel.find()
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

router.get('/single-lesson/single/:lessonName', async function (req, res) {
  try {
    const { lessonName } = req.params

    const result = await SingleLessonModel.findOne({ name: lessonName })

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'LESSON_NOT_FOUND'
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
