require('dotenv').config()

const mongoose = require('mongoose')
const { exists } = require('../models/users')
const Users = require('../models/users')

const url = process.env.MONGO_URL

mongoose.connect(url)

const adminUser = {
  username: 'admin',
  isAdmin: true,
  passwordHash: process.env.ADMIN_HASH
}

const main = async () => {
  console.log(await Users.create(adminUser))
  mongoose.disconnect()
}

main()
