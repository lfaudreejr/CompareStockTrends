"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require("events");
class StockEmitter extends EventEmitter {
    stockRead(stock) {
        console.log('Reading stocks');
        this.emit('stockread', stock);
    }
    stockCreated(stock) {
        this.emit('stockcreate', stock);
    }
    stockDestroy(stock) {
        this.emit('stockdestroy', stock);
    }
}
exports.default = new StockEmitter();
//# sourceMappingURL=stockEmitter.js.map