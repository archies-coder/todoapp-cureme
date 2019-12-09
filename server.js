const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { PORT, serverRunningCallBack } = require('./app/config/config')

const app = express()

app.listen(PORT, serverRunningCallBack)
