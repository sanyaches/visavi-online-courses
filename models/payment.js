const mongoose = require('mongoose')

const PaymentsSchema = new mongoose.Schema({
  paymentRequestId: {
    type: String,
    required: true,
    unique: true
  }
}, {
  collection: 'payments'
})

const model = mongoose.model('PaymentsSchema', PaymentsSchema)

module.exports = model
