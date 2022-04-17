const { Router } = require('express')
const { MongoClient } = require('mongodb')
const { getSaltedHash } = require('../../lib/hash_operations')

const router = Router()

const url = 'mongodb://localhost:27017/'

router.post('/login', function (req, res) {
  try {
    const { username, password } = req.body
    const hash = getSaltedHash(password)

    MongoClient.connect(url, function (err, db) {
      if (err) {
        res.sendStatus(500)
        throw err
      }
      const dbo = db.db('visavi')
      const query = { username, passwordHash: hash }
      dbo.collection('users').findOne(query, function (err, result) {
        if (err) {
          res.sendStatus(500)
          throw err
        }
        if (!result) {
          res.sendStatus(404)
          db.close()
          return
        }
        res.status(200).send({
          username: result.username,
          isAdmin: result.isAdmin
        })
        db.close()
      })
    })
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
