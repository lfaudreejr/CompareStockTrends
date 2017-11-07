import * as chai from 'chai';
import getStockFromQuandl from '../quandlApi';

describe('getStockFromQuandl', () => {
	it('should return json object with dataset property or error object', () => {
		const returnObj = getStockFromQuandl();
		returnObj
			.then((data: string) => {
				const dataObj = data;
				chai.assert.exists(dataObj, 'stockData is not null nor undefined');
				chai.assert.typeOf(dataObj, 'object', 'we have an object');
				chai.assert.include(dataObj, 'dataset', 'has dataset prop');
			})
			.catch((err: object) => {
				chai.assert.typeOf(err, 'object', 'have an error object');
			});
	});
});
