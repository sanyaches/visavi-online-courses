require('dotenv').config()

const mongoose = require('mongoose')
const Users = require('../models/users')

const url = process.env.MONGO_URL

mongoose.connect(url)

const main = async () => {
  console.log(await Users.remove())
  mongoose.disconnect()
}

main()
