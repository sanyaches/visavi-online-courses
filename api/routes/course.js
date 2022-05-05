require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const CourseModel = require('../../models/course')
const router = Router()

const url = process.env.MONGO_URL
mongoose.connect(url)

router.post('/course/add', async function (req, res) {
  try {
    const { name, title, description, imageUrl, price, pricePlus } = req.body

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
