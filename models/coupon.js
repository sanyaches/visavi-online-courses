const mongoose = require('mongoose')

const CouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  discount: {
    type: Number,
    required: true
  },
  discountType: {
    type: String,
    required: true
  },
  isEnabled: {
    type: Boolean,
    required: true
  }
}, {
  collection: 'coupons'
})

const model = mongoose.model('CouponSchema', CouponSchema)

module.exports = model
