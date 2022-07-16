const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  resourceUrl: {
    type: String,
    required: true
  }
}, {
  collection: 'certificates'
})

const model = mongoose.model('CertificateSchema', CertificateSchema)

module.exports = model
