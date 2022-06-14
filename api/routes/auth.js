require('dotenv').config()

const nodemailer = require('nodemailer')
const { Router } = require('express')
const mongoose = require('mongoose')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const { getSaltedHash } = require('../../lib/hash_operations')
const UsersModel = require('../../models/users')
const router = Router()

const jwtSecretKey = process.env.JWT_SECRET
const restorePasswordSecretKey = process.env.RESTORE_PASSWORD_SECRET_KEY
const emailSecret = process.env.EMAIL_SECRET
const emailAdmin = process.env.EMAIL_ADMIN
const emailSecretKey = process.env.EMAIL_SECRET_KEY
const baseUrl = process.env.BASE_URL

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

async function verifyUserToken (req, res, next) {
  if (!req.token) {
    return res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }

  const user = jwt.verify(req.token, jwtSecretKey)
  const query = {
    _id: user.id
  }

  const userResult = await UsersModel.findOne(query)
  const { email } = req.body

  if (userResult.email !== email) {
    return res.status(403).json({
      status: 'error',
      errorCode: 'FORBIDDEN_ERROR'
    })
  }

  next()
}

router.post('/auth/login', async function (req, res) {
  try {
    const { email, password } = req.body
    const hash = getSaltedHash(password)

    const query = { email }
    const result = await UsersModel.findOne(query)

    if (!result || hash !== result.passwordHash) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
      })
    }

    const token = jwt.sign({
      id: result._id,
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

router.post('/auth/restore-password', async function (req, res) {
  try {
    const { email, password, key } = req.body

    const query = { email }
    const userResult = await UsersModel.findOne(query)
    if (!userResult) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
      })
    }

    const bytes = CryptoJS.AES.decrypt(key, restorePasswordSecretKey)
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

    if (Date.now() > data.expiredDate) {
      return res.status(403).json({
        status: 'error',
        errorCode: 'EXPIRED_LINK_ERROR'
      })
    }

    const user = jwt.verify(data.token, jwtSecretKey)
    if (userResult.id !== user.id) {
      return res.status(403).json({
        status: 'error',
        errorCode: 'FORBIDDEN_ERROR'
      })
    }

    const hash = getSaltedHash(password)
    const changeResult = await UsersModel.updateOne(query, { passwordHash: hash })

    if (!changeResult) {
      throw new Error('password_not_changed')
    }

    return res.status(200).json({
      status: 'success',
      user: {
        email: userResult.email,
        firstName: userResult.firstName,
        lastName: userResult.lastName,
        isAdmin: userResult.isAdmin
      },
      token: data.token
    })
  } catch (_) {
    return res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/auth/recovery-password', async function (req, res) {
  try {
    const { email } = req.body
    const query = { email }
    const result = await UsersModel.findOne(query)

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
      })
      return
    }

    const token = jwt.sign({
      id: result._id,
      isAdmin: result.isAdmin
    }, jwtSecretKey)

    const data = JSON.stringify({ token, expiredDate: Date.now() + 10 * 3600 * 1000 })
    const encryptedData = encodeURIComponent(CryptoJS.AES.encrypt(data, restorePasswordSecretKey).toString())
    const bytes = CryptoJS.AES.decrypt(emailSecret, emailSecretKey)
    const emailPassword = bytes.toString(CryptoJS.enc.Utf8)

    const transporter = nodemailer.createTransport({
      service: 'Mail.ru',
      auth: {
        user: emailAdmin,
        pass: emailPassword
      }
    })

    const mailOptions = {
      from: emailAdmin,
      to: email,
      subject: 'Восстановление пароля на онлайн платформе vikosto',
      html: `<h1>Восстановление пароля</h1>
      <div>
        <span>Ссылка на восстановление пароля:</span>
        <a href="${baseUrl}/restore-password?key=${encryptedData}&email=${email}">
          ${baseUrl}/restore-password?key=${encryptedData}&email=${email}
        </a>
      </div>
      <p>Данная ссылка действительна 10 часов с момента создания.</p>
      <p>Не пересылайте никому эту ссылку.</p>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(500).json({
          status: 'error',
          errorCode: 'SERVER_ERROR'
        })
      } else {
        return res.status(200).json({
          status: 'success'
        })
      }
    })
  } catch (e) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR'
    })
  }
})

router.post('/auth/change-password', verifyToken, verifyUserToken, async function (req, res) {
  try {
    const { email, password: newPassword } = req.body
    const hash = getSaltedHash(newPassword)

    const query = { email }
    const result = await UsersModel.findOne(query)

    if (!result) {
      res.status(404).json({
        status: 'error',
        errorCode: 'USER_NOT_FOUND'
      })
      return
    }

    const token = jwt.sign({
      id: result._id,
      isAdmin: result.isAdmin
    }, jwtSecretKey)

    const changeResult = await UsersModel.updateOne(query, { passwordHash: hash })

    if (!changeResult) {
      res.status(500).json({
        status: 'error',
        errorCode: 'CHANGE_PASSWORD_ERROR'
      })
      return
    }

    res.status(200).json({
      status: 'success',
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
      _id: user.id
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
