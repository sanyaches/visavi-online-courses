require('dotenv').config()

const nodemailer = require('nodemailer')
const CryptoJS = require('crypto-js')
const emailSecret = process.env.EMAIL_SECRET
const emailAdmin = process.env.EMAIL_ADMIN
const emailSecretKey = process.env.EMAIL_SECRET_KEY

function defaultCb (error, info) {
  if (error) {
    throw error
  } else {
    return info
  }
}

export const sendEmail = (htmlBody, options, callback = defaultCb) => {
  try {
    const bytes = CryptoJS.AES.decrypt(emailSecret, emailSecretKey)
    const emailPassword = bytes.toString(CryptoJS.enc.Utf8)

    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: emailAdmin,
        pass: emailPassword
      }
    })

    const mailOptions = {
      from: emailAdmin,
      to: options.toEmail,
      subject: options.subject,
      html: htmlBody
    }

    transporter.sendMail(mailOptions, callback)
  } catch (e) {
    console.error('[ERROR] sendEmail: ', e)
  }
}
