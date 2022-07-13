const mongoose = require('mongoose')

const FilePurchasesSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true
  },
  // lessonType = 'singleLesson' | 'lesson'
  lessonType: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  startDate: {
    type: Number,
    required: true
  },
  endDate: {
    type: Number,
    required: true
  }
}, {
  collection: 'filePurchases'
})

const model = mongoose.model('FilePurchasesSchema', FilePurchasesSchema)

module.exports = model
