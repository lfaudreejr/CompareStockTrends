import get from '../axios/'
import config from '../config/'

// getStockFromQuandl :: string -> promise
function getStockFromQuandl (stock: string = 'FB', start: string = '2017') {
  const url: string = setQuandlUrl(stock, start)
  return get(url)
}

// setUrl :: string -> string
function setQuandlUrl (stock: string = 'FB', start: string = '2017') {
  return `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?api_key=${config.quandlKey}&start_data=${start}`
}

export default getStockFromQuandl
