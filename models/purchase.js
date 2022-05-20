const mongoose = require('mongoose')

const PurchasesSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  // courseType = 'singleLesson' | 'course'
  courseType: {
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
  collection: 'purchases'
})

const model = mongoose.model('PurchasesSchema', PurchasesSchema)

module.exports = model
