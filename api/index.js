import path from 'path'

const express = require('express')
const cors = require('cors')

// Create express instance
const app = express()
app.use(cors({
  origin: [
    /^https?:\/\/localhost:\d{2,5}$/,
    'https://vikosto.net',
    /\.vikosto\.net$/
  ]
}))

// Require API routes
const auth = require('./routes/auth')
const course = require('./routes/course')
const lesson = require('./routes/lesson')
const singleLesson = require('./routes/singleLesson')
const purchase = require('./routes/purchase')
const payment = require('./routes/payment')
const certificate = require('./routes/certificate')
const email = require('./routes/email')
const coupon = require('./routes/coupon')
const users = require('./routes/users')
const message = require('./routes/message')

// Import API Routes
app.use(express.json())

app.use(auth)
app.use(course)
app.use(lesson)
app.use(singleLesson)
app.use(purchase)
app.use(payment)
app.use(certificate)
app.use(email)
app.use(coupon)
app.use(users)
app.use(message)

app.use('/videos', express.static(path.join(__dirname, 'videos_public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
