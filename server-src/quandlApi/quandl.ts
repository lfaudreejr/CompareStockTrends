import get from '../axios/';
import config from './../config/';
import { AxiosResponse } from 'axios';

// getStockFromQuandl :: string -> promise {Object}
async function getStockFromQuandl (stock: string, start: string) {
  return new Promise((resolve, reject) => {
    get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?api_key=${config.quandlKey}&start_data=${start}`)
      .then((data: AxiosResponse) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

export default getStockFromQuandl;
