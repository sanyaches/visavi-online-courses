require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { getSaltedHash } = require('../../lib/hash_operations')
const UsersModel = require('../../models/users')
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

router.post('/auth/login', async function (req, res) {
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

    const token = jwt.sign({
      id: result._id,
      email: result.email,
      isAdmin: result.isAdmin
    }, jwtSecretKey)

    res.status(200).json({
      status: 'success',
      user: {
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        isAdmin: result.isAdmin
      },
      token
    })
  } catch (_) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/auth/register', async function (req, res) {
  try {
    const { firstName, lastName, password, email } = req.body
    const hash = getSaltedHash(password)

    const result = await UsersModel.create({ firstName, lastName, passwordHash: hash, email, isAdmin: false })

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_OR_EMAIL_ALREADY_EXISTS'
      })
      return
    }

    const token = jwt.sign({
      id: result._id,
      email: result.email,
      isAdmin: result.isAdmin
    }, jwtSecretKey)

    res.status(200).json({
      status: 'success',
      user: {
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        isAdmin: result.isAdmin
      },
      token
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

router.get('/auth/get-profile', verifyToken, async function (req, res) {
  try {
    const { token } = req

    const user = jwt.verify(token, jwtSecretKey)
    const query = {
      _id: user.id,
      email: user.email
    }

    const result = await UsersModel.findOne(query)

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
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
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

module.exports = router
