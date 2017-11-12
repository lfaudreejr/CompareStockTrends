require('dotenv').config()
import * as express from 'express'
import * as compression from 'compression'
import * as path from 'path'
import * as http from 'http'
import io from './socketio'
import config from './config/'
const favicon = require('serve-favicon')
const app = express()
/**
 * Create HTTP server.
 */
const server = new http.Server(app)
const socket = io.createSocket(server)
const port = normalizePort(config.port || '3000')
app.set('port', port)
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
io.testEvents(socket)
io.stockEvents(socket)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val: any) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening () {
  const addr = server.address()
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
}

export default server
