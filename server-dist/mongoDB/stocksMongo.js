"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
const config_1 = require("../config");
const Stock_1 = require("./../stocks/Stock");
const MongoClient = mongo.MongoClient;
const URL = config_1.default.mongoUrl;
let db;
function connectDB() {
    return new Promise((resolve, reject) => {
        if (db)
            return resolve(db);
        MongoClient.connect(URL, (err, _db) => {
            if (err)
                return reject(err);
            db = _db;
            resolve(_db);
        });
    });
}
exports.connectDB = connectDB;
function readAll() {
    return connectDB().then((db) => {
        let collection = db.collection('stocks');
        return new Promise((resolve, reject) => {
            let stocks = [];
            collection.find({}).forEach((doc) => {
                stocks.push(doc);
            }, (err) => {
                if (err)
                    reject(err);
                else {
                    resolve(stocks);
                }
            });
        });
    });
}
exports.readAll = readAll;
function read(id) {
    return connectDB().then((db) => {
        let collection = db.collection('stocks');
        return collection
            .findOne({ id: id })
            .then((doc) => {
            if (doc) {
                let stock = new Stock_1.default(doc.id, doc.name, doc.desc, doc.data);
                return stock;
            }
            else {
                return null;
            }
        })
            .catch((err) => {
            console.error(err);
        });
    });
}
exports.read = read;
function create(id, name, desc, data) {
    return connectDB().then((db) => {
        let stock = new Stock_1.default(id, name, desc, data);
        let collection = db.collection('stocks');
        return collection
            .insertOne(stock)
            .then(() => {
            return stock;
        })
            .catch((err) => {
            console.error(err);
        });
    });
}
exports.create = create;
function destroy(id) {
    return connectDB().then((db) => {
        let collection = db.collection('stocks');
        return collection.findOneAndDelete({ _id: id });
    });
}
exports.destroy = destroy;
//# sourceMappingURL=stocksMongo.js.map