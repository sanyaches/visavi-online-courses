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
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
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
