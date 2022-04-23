const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean
  }
}, {
  collection: 'users'
})

const model = mongoose.model('UsersSchema', UsersSchema)

module.exports = model
