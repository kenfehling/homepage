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
import {RESUME_FILE} from '../src/constants/links'

const buildPath = __dirname
const app = express()
const serve = serveStatic(buildPath)
app.get('*', serve)
app.use('/static', serve)
app.set('views', buildPath)
app.set('view engine', 'ejs')
app.use(compression())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const unless = function(path, middleware) {
  return function(req, res, next) {
    if (path === req.path) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  }
}

app.post("/api/contact", function (req, res) {
  const from = req.body.from
  const subject = req.body.subject
  const body = req.body.body
  const transporter = nodemailer.createTransport(mg(auth))
  const mailOptions = {
    'h:Reply-To': from,
    from: 'form@kenfehling.com',
    to: 'me@kenfehling.com',
    subject,
    text: body
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('\nERROR: ' + error+'\n')
      res.status(error.status || 400).json({error})
    } else {
      console.log('\nRESPONSE SENT: ' + info.response+'\n')
      res.status(200).json({})
    }
  })
})

app.get('/api/' + RESUME_FILE, function (req, res) {
  res.setHeader('Content-Type', 'application/octet-stream')
  res.sendFile(path.join(buildPath, RESUME_FILE))
})

app.use(unless('/api', (req, res) => {
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
}))

const port = process.env.PORT || 3000
app.listen(port, console.log(`Server running on port ${port}`))