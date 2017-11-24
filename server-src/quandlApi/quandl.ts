import get from '../axios/';
import config from './../config/';
import { AxiosResponse } from 'axios';

// getStockFromQuandl :: string -> promise {Object}
async function getStockFromQuandl (stock: string) {
  return new Promise((resolve, reject) => {
    get(
      `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?column_index=11&exclude_column_names=true&order=asc&collapse=daily&api_key=${config.quandlKey}`
    )
      .then((data: AxiosResponse) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

export default getStockFromQuandl;
