const mongoose = require('mongoose')

const UserCouponSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  couponId: {
    type: String,
    required: true
  }
}, {
  collection: 'userCoupons'
})

const model = mongoose.model('UserCouponSchema', UserCouponSchema)

module.exports = model
