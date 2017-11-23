"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
    quandlKey: process.env.QUANDL_KEY,
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
};
exports.default = config;
//# sourceMappingURL=index.js.map