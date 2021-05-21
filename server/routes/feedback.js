const express = require('express')
const route = express.Router();
const { emailFeedback } = require('../controller/feedback')


route.get('/', emailFeedback);

module.exports = route;