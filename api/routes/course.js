require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const CourseModel = require('../../models/course')
const UsersModel = require('../../models/users')
const PurchaseModel = require('../../models/purchase')
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

router.post('/course/add', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      description,
      shortDescription,
      imageUrl = 'api/upload/example-image.png',
      thumbnailUrl = 'api/upload/example-image.png',
      cardImageFirst = '/api/upload/single-photo.png',
      cardImageSecond = '/api/upload/single-photo.png',
      promoUrl,
      price,
      currency,
      newPrice,
      accessMonths,
      locale
    } = req.body

    const result = await CourseModel.create({
      name,
      title,
      description,
      shortDescription,
      imageUrl,
      price,
      newPrice,
      currency,
      thumbnailUrl,
      cardImageFirst,
      cardImageSecond,
      promoUrl,
      accessMonths,
      locale,
      createdAt: Date.now(),
      updatedAt: Date.now()
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
      course: {
        name: result.name,
        title: result.title,
        description: result.description,
        shortDescription: result.shortDescription,
        imageUrl: result.imageUrl,
        thumbnailUrl: result.thumbnailUrl,
        cardImageFirst: result.cardImageFirst,
        cardImageSecond: result.cardImageSecond,
        price: result.price,
        newPrice: result.newPrice,
        currency: result.currency,
        accessMonths: result.accessMonths,
        locale: result.locale,
        promoUrl: result.promoUrl,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
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

router.post('/course/edit', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const {
      name,
      title,
      description,
      shortDescription,
      imageUrl = 'api/upload/example-image.png',
      thumbnailUrl = 'api/upload/example-image.png',
      cardImageFirst = '/api/upload/single-photo.png',
      cardImageSecond = '/api/upload/single-photo.png',
      promoUrl,
      price,
      newPrice,
      currency,
      accessMonths,
      locale
    } = req.body

    const result = await CourseModel.updateOne({ name }, {
      title,
      description,
      shortDescription,
      imageUrl,
      thumbnailUrl,
      cardImageFirst,
      cardImageSecond,
      promoUrl,
      price,
      newPrice,
      currency,
      accessMonths,
      locale,
      updatedAt: Date.now()
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

router.post('/course/delete', verifyToken, verifyAdminToken, async function (req, res) {
  try {
    const { name } = req.body

    const result = await CourseModel.deleteOne({ name })

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'COURSE_NOT_FOUND'
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

router.get('/course/list', async function (req, res) {
  try {
    const limit = parseInt(req.query.limit, 10) || 10
    const offset = parseInt(req.query.offset, 10) || 0
    const forMySelf = req.query.myself ? req.query.myself === 'true' : undefined
    const locale = req.query.locale
    const filter = createNormalizeFilter({ forMySelf, locale })

    const result = await CourseModel.find(filter)
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

router.get('/course/single/:courseName', async function (req, res) {
  try {
    const { courseName } = req.params

    const result = await CourseModel.findOne({ name: courseName })

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'COURSE_NOT_FOUND'
      })
      return
    }
    res.status(200).json({
      status: 'success',
      data: {
        course: result
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.get('/course/single-extra/:courseName', async function (req, res) {
  try {
    const getPurchase = async (token, courseName) => {
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

    const { courseName } = req.params
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

    const foundPurchase = await getPurchase(bearerToken, courseName)

    if (!foundPurchase) {
      res.status(404).json({
        status: 'error',
        errorCode: 'NOT_PURCHASED'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
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
