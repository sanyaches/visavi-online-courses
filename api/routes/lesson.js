require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const LessonModel = require('../../models/lesson')
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

async function assignLessonToCourse (lessonId, courseName) {
  const resultCourse = await CourseModel.findOne({ name: courseName })

  if (!resultCourse) {
    return
  }

  if (!resultCourse.lessonIds || !Array.isArray(resultCourse.lessonIds)) {
    return
  }

  const concatLessonsIds = resultCourse.lessonIds.concat(lessonId)
  await CourseModel.updateOne({ name: courseName }, { lessonIds: concatLessonsIds })

  return concatLessonsIds
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
      presentationUrl = 'api/upload/thumbnail-example.png',
      duration
    } = req.body

    const result = await LessonModel.create({
      name,
      title,
      description,
      category,
      videoUrl,
      thumbnailUrl,
      presentationUrl,
      duration
    })

    if (!result) {
      res.status(500).json({
        status: 'error',
        errorCode: 'SERVER_ERROR'
      })
      return
    }

    const assignedLessonIds = await assignLessonToCourse(result._id.toString(), courseName)

    if (!assignedLessonIds) {
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

router.get('/lesson/list-by-course/:courseName', async function (req, res) {
  try {
    const { courseName } = req.params

    const resultCourse = await CourseModel.findOne({ name: courseName })
    if (!resultCourse.lessonIds || !resultCourse.lessonIds.length) {
      res.status(200).json({
        status: 'success',
        data: []
      })
    }
    const lessonIds = resultCourse.lessonIds

    const foundLessons = await LessonModel.find().where('_id').in(lessonIds).exec()

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
    const { lessonName } = req.params

    const result = await LessonModel.findOne({ name: lessonName })

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
