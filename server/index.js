require('source-map-support').install()
require('dotenv').config()
import express from 'express'
import serveStatic from 'serve-static'
//import expressStaticGzip from 'express-static-gzip'
import path from 'path'
import compression from 'compression'
import enforceSSL from 'express-sslify'
import React from 'react'
import App from '../src/containers/App'
import {renderToString} from 'react-dom/server'
import {HistoryRouter} from 'react-router-nested-history'
import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'
import bodyParser from 'body-parser'
import {RESUME_FILE} from '../src/constants/links'
import Helmet from 'react-helmet'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../src/reducers'

const auth = {
  api_key: process.env.MAILGUN_API_KEY,
  domain: 'kenfehling.com'
}

const buildPath = __dirname
const app = express()

//Before all
app.use(compression())

/*
if (process.env.MODE === 'production') {
  app.use(enforceSSL.HTTPS())
}
*/

const serve = serveStatic(buildPath)
app.get('*', serve)
app.use('/static', serve)
app.set('views', buildPath)
app.set('view engine', 'ejs')

// After static so it compresses only dynamic assets (like generated HTML)
//app.use(compression())

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
  const transporter = nodemailer.createTransport(mg({auth}))
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
      res.status(error.statusCode || 400).json({error})
    } else {
      res.sendStatus(200)
    }
  })
})

app.get('/api/' + RESUME_FILE, function (req, res) {
  res.setHeader('Content-Type', 'application/octet-stream')
  res.sendFile(path.join(buildPath, RESUME_FILE))
})

app.use(unless('/api', (req, res) => {
  const context = {}
  const store = createStore(reducer)
  const body = renderToString(
    <Provider store={store}>
      <HistoryRouter location={req.url} context={context}>
        <App />
      </HistoryRouter>
    </Provider>
  )
  const helmet = Helmet.renderStatic()
  const head = helmet.title.toString() + helmet.meta.toString()
  if (context.url) {
    return res.redirect(302, context.url)
  }
  return res
    .status(context.status || 200)
    .render('index', {head, body})
}))

const port = process.env.PORT || 3000
app.listen(port, console.log(`Server running on port ${port}`))