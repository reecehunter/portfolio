/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const AWS = require('aws-sdk')
const ses = new AWS.SES()

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

/**********************
 * Routes             *
 **********************/

app.post('/contact', async function (req, res) {
  if (!req.body.first_name || !req.body.email || !req.body.message) {
    console.error('Missing required fields', req.body)
    res.status(400).json({ success: false, error: 'Missing required fields' })
    return
  }

  const params = {
    Destination: {
      ToAddresses: ['heecerunter+portfolio@gmail.com'],
    },
    Message: {
      Subject: { Data: 'Portfolio Contact Form' },
      Body: {
        Text: {
          Data: `From: ${req.body.first_name}
Email: ${req.body.email}

${req.body.message}`,
        },
      },
    },
    Source: 'heecerunter+portfolio@gmail.com',
  }

  try {
    await ses.sendEmail(params).promise()
    res.json({ success: true })
  } catch (err) {
    console.error('Error sending email:', err)
    res.status(500).json({ success: false, error: err.message })
  }
})

/**********************
 * Start the server   *
 **********************/

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
