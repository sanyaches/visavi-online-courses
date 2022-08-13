/* eslint-disable camelcase */
require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const UsersModel = require('../../models/users')
const { sendEmail } = require('../sendEmail.js')
const router = Router()

const adminEmail = process.env.EMAIL_ADMIN

const url = process.env.MONGO_URL
mongoose.connect(url)

router.post('/message/notify', async function (req, res) {
  try {
    const { to, body } = req.body
    console.log('New message is caught (to): ', to)
    console.log('New message is caught (body): ', body)
    res.sendStatus(200)

    const user = await UsersModel.findOne({ _id: to })
    if (user && user.email && user.email === adminEmail) {
      sendEmail(`У вас новое сообщение на сайте vikosto: ${body.data?.text}`, {
        toEmail: user.email,
        subject: 'У вас новое сообщение на сайте vikosto'
      })
    }
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
