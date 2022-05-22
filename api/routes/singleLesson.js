require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SingleLessonModel = require('../../models/singleLesson')
const FileModel = require('../../models/file')
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
      duration,
      accessMonths,
      locale,
      price
    } = req.body

    const result = await SingleLessonModel.create({
      name,
      title,
      description,
      videoUrl,
      promoUrl,
      duration,
      accessMonths,
      locale,
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
        thumbnailUrl: result.thumbnailUrl,
        duration: result.duration,
        accessMonths: result.accessMonths,
        locale: result.locale,
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

router.post('/single-lesson/add-file', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      lessonName,
      resourceUrl = '/api/videos/example.mp4'
    } = req.body

    const result = await FileModel.create({
      name,
      title,
      lessonName,
      lessonType: 'singleLesson',
      resourceUrl
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
      file: {
        name: result.name,
        title: result.title,
        lessonName: result.lessonName,
        lessonType: result.lessonType,
        resourceUrl: result.resourceUrl
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
        errorCode: 'FILE_ALREADY_EXISTS'
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
      duration,
      accessMonths,
      price,
      locale
    } = req.body

    const result = await SingleLessonModel.updateOne({ name }, {
      title,
      description,
      videoUrl,
      thumbnailUrl,
      promoUrl,
      duration,
      accessMonths,
      price,
      locale
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

router.get('/single-lesson/list-demo', async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 10
    const offset = parseInt(req.query.offset, 10) || 0

    const result = await SingleLessonModel.find({}, { videoUrl: 0 })
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

router.get('/single-lesson/single-demo/:lessonName', async function (req, res) {
  try {
    const { lessonName } = req.params

    const result = await SingleLessonModel.findOne({ name: lessonName }, { videoUrl: 0 })

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

//! TODO: Add check by purchase
router.get('/single-lesson/single/:lessonName', async function (req, res) {
  try {
    const { lessonName } = req.params

    const result = await SingleLessonModel.findOne({ name: lessonName })
    const foundFiles = await FileModel.find({ lessonName, lessonType: 'singleLesson' }).exec()

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'LESSON_NOT_FOUND'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        singleLesson: result,
        files: foundFiles
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
