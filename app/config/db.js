const mongoose = require('mongoose')
const { dbURI } = require('./config')

const connectToDB = async () => {
  await mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log(`connected to ${dbURI}`)
    })
    .catch(err => console.log(err))
}

module.exports = { connectToDB }
