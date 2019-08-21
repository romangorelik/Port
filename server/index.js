const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const router = require('../database/routes')

const app = express()

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', router)

const port = 3000
app.listen(port, () => console.log(`Listening to port ${port}`))