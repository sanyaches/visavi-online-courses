require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const LessonModel = require('../../models/lesson')
const FileModel = require('../../models/file')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
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

router.post('/lesson/add', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      courseName,
      name,
      title,
      description,
      category,
      videoUrl = 'api/videos_public/example.mp4',
      thumbnailUrl = 'api/upload/thumbnail-example.png',
      duration
    } = req.body

    const result = await LessonModel.create({
      name,
      courseName,
      title,
      description,
      category,
      videoUrl,
      thumbnailUrl,
      duration
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

router.post('/lesson/add-file', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      lessonName,
      resourceUrl
    } = req.body

    const result = await FileModel.create({
      name,
      title,
      lessonName,
      lessonType: 'lesson',
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

router.post('/lesson/delete', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const { name } = req.body

    const result = await LessonModel.deleteOne({ name })

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

router.get('/lesson/list-by-course/:courseName', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const { courseName } = req.params

    const foundLessons = await LessonModel.find({ courseName }).exec()

    if (!foundLessons) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: foundLessons
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/lesson/list-by-course-demo/:courseName', async function (req, res) {
  try {
    const { courseName } = req.params

    const foundLessons = await LessonModel.find({ courseName }, { videoUrl: 0 }).exec()

    if (!foundLessons) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: foundLessons
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/lesson/single/:lessonName', async function (req, res) {
  try {
    const checkPurchased = async (token, courseName) => {
      if (!token) {
        return false
      }
      const user = jwt.verify(token, jwtSecretKey)
      const query = {
        _id: user.id
      }

      const userResult = await UsersModel.findOne(query)

      if (!userResult || !userResult.email) {
        return false
      }

      if (userResult.isAdmin) {
        return {
          courseName,
          courseType: 'course',
          endDate: Date.now() + 100000000,
          startDate: Date.now() - 100000000,
          userEmail: userResult.email
        }
      }

      const purchaseCourse = await PurchaseModel.findOne({
        courseType: 'course',
        courseName,
        userEmail: userResult.email
      })

      return purchaseCourse
    }

    const { lessonName } = req.params
    const result = await LessonModel.findOne({ name: lessonName })

    if (!result) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'LESSON_NOT_FOUND'
      })
    }

    const bearerHeader = req.headers.authorization
    let foundPurchase = null

    if (bearerHeader) {
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]

      foundPurchase = await checkPurchased(bearerToken, result.courseName)
    }

    if (!foundPurchase) {
      return res.status(403).json({
        status: 'error',
        errorCode: 'FORBIDDEN_ERROR'
      })
    }

    const foundFiles = await FileModel.find({ lessonName, lessonType: 'lesson' }).exec()

    const files = foundFiles.map(file => ({
      name: file.name,
      title: file.title,
      lessonName: file.lessonName,
      lessonType: file.lessonType,
      resourceUrl: file.resourceUrl
    }))
    res.status(200).json({
      status: 'success',
      data: {
        lesson: result,
        files,
        purchase: foundPurchase
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
