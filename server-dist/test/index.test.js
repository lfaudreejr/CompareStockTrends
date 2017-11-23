"use strict";
/* eslint-env node, mocha */
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
describe('Server.listen()', () => {
    it('should wrap an http server', (done) => {
        _1.default.listen(5000, () => {
            _1.default.close();
            done();
        });
    });
});
//# sourceMappingURL=index.test.js.map