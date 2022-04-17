// require('./create_db.js')

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) { throw err }
  const dbo = db.db('visavi')

  dbo.collection('users').findOne({}, function (err, result) {
    if (err) { throw err }
    console.log(result.username)
    db.close()
  })
})
