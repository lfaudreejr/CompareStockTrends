"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const _1 = require("../quandlApi/");
/**
   * Testing Socket handler
   */
function testEvents(socketParam) {
    const socketTest = socketParam.of('/test');
    socketTest.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
        const stocks = yield mongoDB_1.default.readAll();
        stocks.forEach((stock) => {
            socket.emit('connected', stock);
        });
        socket.on('search', (data) => {
            const search = handleSearch(data);
            search.then((results) => {
                socketTest.emit('results', results);
            });
        });
        socket.on('removeStock', (stock) => {
            mongoDB_1.default.destroy(stock._id);
            socketTest.emit('stockRemoved', stock);
        });
    }));
    socketTest.on('disconnect', () => {
        console.log('Client disconnected');
    });
}
/**
   *  Socket handler stock search from client
   */
function handleSearch(data) {
    const get = _1.default.getStock(data, '2017');
    return get
        .then((results) => __awaiter(this, void 0, void 0, function* () {
        let { id, dataset_code, name, data } = results.data.dataset;
        let stock = yield mongoDB_1.default.read(id);
        if (stock) {
            return stock;
        }
        else {
            stock = mongoDB_1.default.create(id, dataset_code, name, data);
            return stock.then((createdStock) => {
                return createdStock;
            });
        }
    }))
        .catch((err) => {
        throw new Error('Error in handleSearch');
    });
}
exports.default = testEvents;
//# sourceMappingURL=testEvents.js.map