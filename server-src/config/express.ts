'use strict';
import * as express from 'express';
import * as compression from 'compression';
import * as path from 'path';

const app = express();
require('dotenv').config();

app.use(compression());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client-dist'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client-dist', 'index.html'));
	});
}

module.exports = app;
