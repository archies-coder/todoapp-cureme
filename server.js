const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { connectToDB } = require('./app/config/db')
// eslint-disable-next-line prettier/prettier
const { PORT, serverRunningCallBack } = require('./app/config/config')

const start = async () => {
  try {
    await connectToDB()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  try {
    // Express App
    const app = await express()
    // Body Parser
    app.use(bodyParser.json())
    // CORS
    app.use(cors())

    await app.listen(PORT, serverRunningCallBack)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
