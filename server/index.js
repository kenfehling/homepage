require('source-map-support').install()
import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'
import compression from 'compression'
import React from 'react'
import App from '../src/containers/App'
import {renderToString} from 'react-dom/server'
import {HistoryRouter} from 'react-router-nested-history'
import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'
import bodyParser from 'body-parser'
import auth from './mail.json'

const buildPath = path.join(__dirname, 'build')
const app = express()
const serve = serveStatic(buildPath)
app.use(serve)
app.use('/static', serve)
app.set('views', buildPath)
app.set('view engine', 'ejs')
app.use(compression())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/contact", function (req, res) {
  const from = req.body.from
  const subject = req.body.subject
  const body = req.body.body

  // create transporter object capable of sending email using the default SMTP transport
  const transporter = nodemailer.createTransport(mg(auth))

  // TODO: We might need to do from: form@kenfehling, reply-to: from
  const mailOptions = {
    'h:Reply-To': from,
    from: 'form@kenfehling.com',
    to: 'me@kenfehling.com',
    subject,
    text: body

  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('\nERROR: ' + error+'\n')
      res.json({ yo: 'error' })
    } else {
      console.log('\nRESPONSE SENT: ' + info.response+'\n')
      res.json({ yo: info.response })
    }
  })
})

app.get('*', (req, res) => {
  const context = {}

  const html = renderToString(
    <HistoryRouter location={req.url} context={context}>
      <App />
    </HistoryRouter>,
  )

  if (context.url) {
    return res.redirect(302, context.url)
  }

  return res
    .status(context.status || 200)
    .render('index', {html})
})

const port = process.env.PORT || 3000
app.listen(port, console.log(`Server running on port ${port}`))