require('dotenv').config()

const mongoose = require('mongoose')
const Users = require('../models/users')

const url = process.env.MONGO_URL

mongoose.connect(url)

const main = async () => {
  const user = await Users.findOne({ email: 'sanyaches95@gmail.com' })
  console.log(user)
  mongoose.disconnect()
}

main()
