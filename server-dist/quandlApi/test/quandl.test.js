"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env node, mocha */
const chai = require("chai");
const chaiPromise = require("chai-as-promised");
const _1 = require("../");
chai.use(chaiPromise);
describe('quandl API', () => {
    describe('get', () => {
        let resp = _1.default.getStock('P');
        it('should return a response', (done) => {
            chai.expect(resp).to.be.fulfilled.and.notify(done);
        });
        it("should have property 'data'", (done) => {
            chai.expect(resp).to.eventually.haveOwnProperty('data').and.notify(done);
        });
        it("should have deep property 'dataset'", (done) => {
            chai.expect(resp).to.eventually.haveOwnProperty('data').that.has.property('dataset').and.notify(done);
        });
    });
});
//# sourceMappingURL=quandl.test.js.map