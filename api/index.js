const express = require('express')

// Create express instance
const app = express()

// Require API routes
const auth = require('./routes/auth')

// Import API Routes
app.use(express.json())
app.use(auth)

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
