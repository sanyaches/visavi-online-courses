const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  lessonIds: {
    type: [String],
    default: []
  },
  price: {
    type: Number,
    required: true
  },
  pricePlus: {
    type: Number
  }
}, {
  collection: 'courses'
})

const model = mongoose.model('CourseSchema', CourseSchema)

module.exports = model
