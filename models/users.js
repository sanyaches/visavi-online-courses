const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
