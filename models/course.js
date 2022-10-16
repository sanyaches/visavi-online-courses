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
  shortDescription: {
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
  cardImageFirst: {
    type: String
  },
  cardImageSecond: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  newPrice: {
    type: Number
  },
  currency: {
    type: String
  },
  accessMonths: {
    type: Number,
    required: true
  },
  locale: {
    type: String,
    required: true
  },
  forMySelf: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'courses'
})

const model = mongoose.model('CourseSchema', CourseSchema)

module.exports = model
