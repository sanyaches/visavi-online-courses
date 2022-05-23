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
  promoUrl: {
    type: String
  },
  createdAt: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Number,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  accessMonths: {
    type: Number,
    required: true
  },
  locale: {
    type: String,
    required: true
  }
}, {
  collection: 'courses'
})

const model = mongoose.model('CourseSchema', CourseSchema)

module.exports = model
