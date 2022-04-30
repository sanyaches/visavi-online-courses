require('dotenv').config()

const mongoose = require('mongoose')
const Users = require('../models/users')

const url = process.env.MONGO_URL

mongoose.connect(url)

const adminUser = {
  firstName: 'admin',
  lastName: 'admin',
  isAdmin: true,
  email: process.env.ADMIN_EMAIL,
  passwordHash: process.env.ADMIN_HASH
}

const main = async () => {
  console.log(await Users.create(adminUser))
  mongoose.disconnect()
}

main()
