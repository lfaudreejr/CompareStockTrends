'use strict';
import server from './server';
import config from './config/config';

server.listen(config.PORT, () => {
	console.log(`App listening on ${config.PORT}`);
});
