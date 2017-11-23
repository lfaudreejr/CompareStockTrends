"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stock {
    constructor(id, name, desc, data) {
        this._id = id;
        this.name = name;
        this.desc = desc;
        this.data = data;
    }
    getJSON() {
        return JSON.stringify({
            id: this._id,
            name: this.name,
            desc: this.desc,
            data: this.data
        });
    }
}
exports.default = Stock;
//# sourceMappingURL=Stock.js.map