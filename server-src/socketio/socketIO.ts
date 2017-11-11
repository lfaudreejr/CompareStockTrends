'use strict'
import * as SocketIO from 'socket.io'

function createSocket (server: any) {
  return SocketIO(server)
}

export default createSocket
