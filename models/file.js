const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  lessonName: {
    type: String,
    required: true
  },
  // lessonType = 'singleLesson' | 'lesson'
  lessonType: {
    type: String,
    required: true
  },
  resourceUrl: {
    type: String,
    required: true
  },
  needToBuy: {
    type: Boolean
  },
  price: {
    type: Number
  },
  accessMonths: {
    type: Number
  }
}, {
  collection: 'files'
})

const model = mongoose.model('FileSchema', FileSchema)

module.exports = model
