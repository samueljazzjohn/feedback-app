const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config()

// app

const app = express()

// importing routes

const feedback = require('./routes/feedback')

// middleware

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


// routes

app.use('/api', feedback)

// port

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("port is running on " + port)
})