const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: true
  },
  paymentId: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  couponCode: {
    type: String
  },
  productName: {
    type: String,
    required: true
  },
  accessMonths: {
    type: Number,
    required: true
  }
}, {
  collection: 'orders'
})

const model = mongoose.model('OrderSchema', OrderSchema)

module.exports = model
