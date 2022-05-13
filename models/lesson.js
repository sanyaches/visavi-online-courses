const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  /**
   * Category: 'theory' | 'practice' | 'promotion'
   */
  category: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
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
  collection: 'lessons'
})

const model = mongoose.model('LessonSchema', LessonSchema)

module.exports = model
