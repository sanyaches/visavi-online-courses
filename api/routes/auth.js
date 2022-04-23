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
    const { username, password } = req.body
    const hash = getSaltedHash(password)

    const query = { username }
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
        username: result.username,
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

module.exports = router
