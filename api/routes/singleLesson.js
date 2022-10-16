require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SingleLessonModel = require('../../models/singleLesson')
const FileModel = require('../../models/file')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
const FilePurchaseModel = require('../../models/filePurchase')
const { createNormalizeFilter } = require('../../lib/filter')

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
      shortDescription,
      videoUrl = '/api/videos/example.mp4',
      promoUrl = '/api/videos/example.mp4',
      thumbnailUrl = '/api/upload/example-image.png',
      cardImageFirst = '/api/upload/single-photo.png',
      cardImageSecond = '/api/upload/single-photo.png',
      duration,
      accessMonths,
      locale,
      price,
      newPrice,
      currency
    } = req.body

    const result = await SingleLessonModel.create({
      name,
      title,
      description,
      shortDescription,
      videoUrl,
      promoUrl,
      duration,
      accessMonths,
      locale,
      thumbnailUrl,
      cardImageFirst,
      cardImageSecond,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      price,
      newPrice,
      currency
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
        shortDescription: result.shortDescription,
        videoUrl: result.videoUrl,
        promoUrl: result.promoUrl,
        thumbnailUrl: result.thumbnailUrl,
        cardImageFirst: result.cardImageFirst,
        cardImageSecond: result.cardImageSecond,
        duration: result.duration,
        accessMonths: result.accessMonths,
        locale: result.locale,
        price: result.price,
        newPrice: result.newPrice,
        currency: result.currency
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
      resourceUrl = '/api/videos/example.mp4',
      needToBuy,
      price
    } = req.body

    const result = await FileModel.create({
      name,
      title,
      lessonName,
      lessonType: 'singleLesson',
      resourceUrl,
      needToBuy,
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
      file: {
        name: result.name,
        title: result.title,
        lessonName: result.lessonName,
        lessonType: result.lessonType,
        resourceUrl: result.resourceUrl,
        needToBuy: result.needToBuy,
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
      shortDescription,
      videoUrl = '/api/videos/example.mp4',
      promoUrl = '/api/videos/example.mp4',
      thumbnailUrl = '/api/upload/example-image.png',
      cardImageFirst = '/api/upload/single-photo.png',
      cardImageSecond = '/api/upload/single-photo.png',
      duration,
      accessMonths,
      price,
      newPrice,
      currency,
      locale
    } = req.body

    const result = await SingleLessonModel.updateOne({ name }, {
      title,
      description,
      shortDescription,
      videoUrl,
      thumbnailUrl,
      cardImageFirst,
      cardImageSecond,
      promoUrl,
      duration,
      accessMonths,
      price,
      newPrice,
      currency,
      updatedAt: Date.now(),
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
    const locale = req.query.locale
    const filter = createNormalizeFilter({ locale })

    const result = await SingleLessonModel.find(filter, { videoUrl: 0 })
      .sort({ createdAt: 'desc' })
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
      .sort({ createdAt: 'desc' })
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
      data: {
        singleLesson: result
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/single-lesson/single-extra/:lessonName', async function (req, res) {
  try {
    const getPurchases = async (token, lessonName) => {
      if (!token) {
        return null
      }
      const user = jwt.verify(token, jwtSecretKey)
      const query = {
        _id: user.id
      }

      const userResult = await UsersModel.findOne(query)

      if (!userResult || !userResult.email) {
        return null
      }

      if (userResult.isAdmin) {
        return {
          lesson: {
            courseName: lessonName,
            courseType: 'singleLesson',
            endDate: Date.now() + 100000000,
            startDate: Date.now() - 100000000,
            userEmail: userResult.email
          },
          files: []
        }
      }

      const purchaseSingleLesson = await PurchaseModel.findOne({
        courseType: 'singleLesson',
        courseName: lessonName,
        userEmail: userResult.email
      })

      const purchaseFiles = await FilePurchaseModel.find({
        lessonType: 'singleLesson',
        lessonName,
        userEmail: userResult.email
      })

      return {
        lesson: purchaseSingleLesson,
        files: purchaseFiles
      }
    }

    const { lessonName } = req.params
    const bearerHeader = req.headers.authorization

    if (!bearerHeader) {
      res.status(404).json({
        status: 'error',
        errorCode: 'NO_TOKEN'
      })
      return
    }

    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]

    const foundPurchase = await getPurchases(bearerToken, lessonName)

    if (!foundPurchase) {
      res.status(404).json({
        status: 'error',
        errorCode: 'NOT_PURCHASED'
      })
      return
    }

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
        videoUrl: result.videoUrl,
        files: foundFiles,
        purchase: foundPurchase.lesson,
        filePurchases: foundPurchase.files
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
