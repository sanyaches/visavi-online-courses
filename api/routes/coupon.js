require('dotenv').config()

const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()
const CouponSchema = require('../../models/coupon')
const UserCouponSchema = require('../../models/userCoupons')

const url = process.env.MONGO_URL
mongoose.connect(url)

router.post('/coupon/check', async function (req, res) {
  try {
    const {
      userId,
      couponCode
    } = req.body

    const couponFound = await CouponSchema.findOne({ code: couponCode })
    if (!couponFound || !couponFound.isEnabled) {
      return res.status(404).json({
        status: 'error',
        errorCode: 'COUPON_NOT_FOUND'
      })
    }

    const usageCouponResult = await UserCouponSchema.findOne({
      userId,
      couponId: couponFound.id
    })

    if (usageCouponResult) {
      return res.status(405).json({
        status: 'error',
        errorCode: 'COUPON_NOT_ALLOWED'
      })
    }

    return res.status(200).json({
      status: 'success',
      coupon: couponFound
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      errorCode: 'SERVER_ERROR',
      error
    })
  }
})

module.exports = router
