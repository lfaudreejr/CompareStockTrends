import axiosMethod from '../helpers/axios';
import config from '../config/config';

function getStockFromQuandl(stock = 'FB', start = '2017'): any {
	const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?api_key=${config.QUANDL_KEY}&start_data=${start}`;

	return axiosMethod('get')(url);
}

export default getStockFromQuandl;
