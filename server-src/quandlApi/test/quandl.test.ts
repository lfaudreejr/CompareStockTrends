/* eslint-env node, mocha */
require('dotenv').config()

import * as chai from 'chai'
import config from '../../config/'
import getStockFromQuandl from '../'
import get from '../../axios/'

describe('getStockFromQuandl', () => {
  it('should return json object with dataset property or error object', () => {
    const returnObj = getStockFromQuandl('F', '2016')
    returnObj
      .then((data: any) => {
        chai.assert.exists(data, 'stockData is not null nor undefined')
        chai.assert.typeOf(data, 'object', 'we have an object')
        return chai.assert.include(data, 'dataset', 'has dataset prop')
      })
      .catch((err: any) => {
        return chai.assert.isObject(err, 'Error object')
      })
  })
})

describe('axiosMethod get method', () => {
  it('should return axios with the get method', () => {
    it('should return an object given a url', () => {
      const axi = get(`https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=${config.quandlKey}&start_data=2016`)
      axi
        .then((data: any) => {
          return chai.assert.typeOf(data, 'object')
        })
        .catch((err: any) => {
          return chai.assert.isObject(err, 'Error object')
        })
    })
  })
})
