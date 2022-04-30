require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const { getSaltedHash } = require('../../lib/hash_operations')
const UsersModel = require('../../models/users')
const router = Router()

const url = process.env.MONGO_URL
mongoose.connect(url)

router.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body
    const hash = getSaltedHash(password)

    const query = { email }
    const result = await UsersModel.findOne(query)
    if (!result || hash !== result.passwordHash) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
      })
      return
    }
    res.status(200).json({
      status: 'success',
      user: {
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        isAdmin: result.isAdmin
      }
    })
  } catch (_) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/register', async function (req, res) {
  try {
    const { firstName, lastName, password, email } = req.body
    const hash = getSaltedHash(password)

    const result = await UsersModel.create({ firstName, lastName, passwordHash: hash, email, isAdmin: false })
    console.log('Result: ', result)
    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_OR_EMAIL_ALREADY_EXISTS'
      })
      return
    }
    res.status(200).json({
      status: 'success',
      user: {
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        isAdmin: result.isAdmin
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
        errorCode: 'USER_OR_EMAIL_ALREADY_EXISTS'
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
