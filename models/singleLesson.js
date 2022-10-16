const mongoose = require('mongoose')

const SingleLessonSchema = new mongoose.Schema({
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
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String
  },
  cardImageFirst: {
    type: String
  },
  cardImageSecond: {
    type: String
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
  duration: {
    type: Number
  },
  locale: {
    type: String,
    required: true
  }
}, {
  collection: 'singleLessons'
})

const model = mongoose.model('SingleLessonSchema', SingleLessonSchema)

module.exports = model
