/* eslint-env node, mocha */
import * as chai from 'chai';
import * as chaiPromise from 'chai-as-promised';
import config from '../../config/';
import quandlApi from '../';

chai.use(chaiPromise);

describe('quandl API', () => {
  describe('get', () => {
    let resp = quandlApi.getStock('P', '2017');

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
