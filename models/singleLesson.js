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
  presentationUrl: {
    type: String,
    required: true
  },
  duration: {
    type: Number
  }
}, {
  collection: 'singleLessons'
})

const model = mongoose.model('SingleLessonSchema', SingleLessonSchema)

module.exports = model
