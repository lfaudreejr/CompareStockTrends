'use strict'
require('dotenv').config()
import * as express from 'express'
import * as compression from 'compression'
import * as path from 'path'
import * as http from 'http'
import io from './socketio'
import config from './config/'
const favicon = require('serve-favicon')
const app = express()

const server = new http.Server(app)
const socket = io.createSocket(server)
/*
	Middleware
*/
app.use(compression())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client-dist/static')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-dist/index.html'))
  })
}
/*
	Pass socket to handler
*/
io.stockSocket(socket)

server.listen(config.port || 3000, () => {
  const port = server.address().port
  console.log(`App listening on ${port}`)
})

export default server
