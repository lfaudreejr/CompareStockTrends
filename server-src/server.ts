'use strict';
import * as http from 'http';

const app = require('./config/express');

const server = new http.Server(app);

export default server;
