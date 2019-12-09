const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { PORT, serverRunningCallBack } = require('./app/config/config')

// Express App
const app = express()

// Body Parser
app.use(bodyParser.json())
// CORS
app.use(cors())

app.listen(PORT, serverRunningCallBack)
