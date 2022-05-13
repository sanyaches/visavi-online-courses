const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  lessonId: {
    type: String,
    required: true
  },
  // Fields below depends on 3d party solutions
  remoteUrl: {
    type: String,
    required: true
  },
  remoteSecret: {
    type: String,
    required: true
  }
}, {
  collection: 'conversations'
})

const model = mongoose.model('ConversationSchema', ConversationSchema)

module.exports = model
