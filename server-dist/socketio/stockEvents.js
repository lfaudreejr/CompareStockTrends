"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stockEvents(socketParam) {
    /**
     * Socket Handler to add/retreive/delete stocks
     */
    const stockSocket = socketParam.of('/stocks');
    stockSocket.on('connection', onConnect);
}
function onConnect(socket) {
    /**
     * Handle on connection event
     */
    console.log('Socket', socket.id);
    socket.emit('connected', JSON.stringify('Hello'));
}
exports.default = stockEvents;
//# sourceMappingURL=stockEvents.js.map