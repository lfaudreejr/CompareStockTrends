"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("./stocksMongo");
exports.default = {
    connectDB: mongo.connectDB,
    readAll: mongo.readAll,
    read: mongo.read,
    create: mongo.create,
    destroy: mongo.destroy
};
//# sourceMappingURL=index.js.map