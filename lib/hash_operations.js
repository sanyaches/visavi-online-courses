const crypto = require('crypto')

const getHash = (data) => {
  const hash = crypto.createHash('sha512')

  data = hash.update(data, 'utf-8')

  const generatedHash = data.digest('hex')

  return generatedHash
}

const salt = 'visavi'
const getSaltedHash = (data) => {
  return getHash(data + salt)
}

module.exports = {
  getHash,
  getSaltedHash
}
