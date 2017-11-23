"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testEvents_1 = require("./testEvents");
const stockEvents_1 = require("./stockEvents");
const createSocket_1 = require("./createSocket");
const socket = {
    testEvents: testEvents_1.default,
    stockEvents: stockEvents_1.default,
    createSocket: createSocket_1.default
};
exports.default = socket;
//# sourceMappingURL=index.js.map