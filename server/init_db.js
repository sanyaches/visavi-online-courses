const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) { throw err }
  const dbo = db.db('visavi')

  dbo.createCollection('users', function (err, res) {
    if (err) { throw err }
    console.log('[init_db]: Collection users created!')
  })

  const adminUser = {
    username: 'admin',
    isAdmin: true,
    passwordHash: '77d8f24bdd93aa8e8e434c6b0e1d4456760a4580c476ce0e4553042b921983306eece7fc55f8696480465f93126278b3ff200a7e58f6d6ed2728921647d76408'
  }
  dbo.collection('users').insertOne(adminUser, function (err, res) {
    if (err) { throw err }
    console.log('[init_db]: Admin inserted to users')
    db.close()
  })
})
