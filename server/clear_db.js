const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) { throw err }
  const dbo = db.db('visavi')

  dbo.collection('users').drop(function (err, delOK) {
    if (err) { throw err }
    if (delOK) { console.log('Collection users deleted') }
    db.close()
  })
})
