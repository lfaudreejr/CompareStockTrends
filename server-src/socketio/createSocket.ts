import * as SocketIO from 'socket.io';
import * as http from 'http';

function createSocket (server: http.Server) {
  return SocketIO(server);
}

export default createSocket;
