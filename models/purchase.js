const mongoose = require('mongoose')

const PurchasesSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  /* Type: ['can-review', 'can-certificate', 'can-watch-more-lessons'] */
  accessType: {
    type: Array,
    required: true
  }
}, {
  collection: 'purchases'
})

const model = mongoose.model('PurchasesSchema', PurchasesSchema)

module.exports = model
