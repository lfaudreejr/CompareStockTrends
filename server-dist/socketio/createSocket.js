"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketIO = require("socket.io");
function createSocket(server) {
    return SocketIO(server);
}
exports.default = createSocket;
//# sourceMappingURL=createSocket.js.map