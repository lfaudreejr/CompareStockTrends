'use strict';
import * as SocketIO from 'socket.io';

const server = require('../server');

function createSocket(server: string) {
	return SocketIO(server);
}
const socket = createSocket(server);

module.exports = socket;
