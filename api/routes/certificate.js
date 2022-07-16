require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const CertificateModel = require('../../models/certificate')
const router = Router()

const jwtSecretKey = process.env.JWT_SECRET

const url = process.env.MONGO_URL
mongoose.connect(url)

function addTokenToRequest (req, res, next) {
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

router.get('/certificate/list-by-user-id/:userId', addTokenToRequest, async function (req, res) {
  try {
    const { userId } = req.params

    const user = jwt.verify(req.token, jwtSecretKey)

    if (user.id !== userId) {
      return res.status(403).json({
        status: 'error',
        errorCode: 'FORBIDDEN_ERROR'
      })
    }

    const result = await CertificateModel.find({ userId }).exec()

    if (!result) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'NOT_FOUND'
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        certificates: result
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
