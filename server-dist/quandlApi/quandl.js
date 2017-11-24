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
const _1 = require("../axios/");
const _2 = require("./../config/");
// getStockFromQuandl :: string -> promise {Object}
function getStockFromQuandl(stock) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            _1.default(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?column_index=11&exclude_column_names=true&order=asc&collapse=daily&api_key=${_2.default.quandlKey}`)
                .then((data) => {
                resolve(data);
            })
                .catch((err) => {
                reject(err);
            });
        });
    });
}
exports.default = getStockFromQuandl;
//# sourceMappingURL=quandl.js.map