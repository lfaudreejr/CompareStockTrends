/* eslint-env node, mocha */
// const server = require('../server');

import server from '../server';

describe('Server.listen()', () => {
	it('should wrap an http server', done => {
		server.listen(5000, () => {
			server.close();
			done();
		});
	});
});
