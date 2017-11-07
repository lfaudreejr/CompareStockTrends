'use strict';
const socket = require('./config/socket');

socket.on('connection', () => {
	console.log('Client connected', socket.id);
});
socket.on('disconnect', () => {
	console.log('Client disconnected');
});
