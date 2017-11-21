import get from '../axios/'
import config from './../config/'

// getStockFromQuandl :: string -> promise {Object}
async function getStockFromQuandl (stock: string, start: string) {
  return new Promise((resolve: any, reject: any) => {
    get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?api_key=${config.quandlKey}&start_data=${start}`)
      .then((data: any) => {
        resolve(data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default getStockFromQuandl
