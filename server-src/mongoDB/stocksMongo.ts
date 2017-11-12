import * as mongo from 'mongodb'
import config from '../config'
import Stock from './../stocks/Stock'
import StockEmitter from './../stocks/stockEmitter'

const MongoClient: any = mongo.MongoClient

let db: any

export function connectDB (): any {
  return new Promise((resolve: any, reject: any) => {
    if (db) return resolve(db)

    const url: string = config.mongoUrl

    MongoClient.connect(url, (err: any, _db: any) => {
      if (err) return reject(err)
      db = _db
      resolve(_db)
    })
  })
}

export function readAll (): any {
  return connectDB().then((db: any) => {
    let collection = db.collection('stocks')
    return new Promise((resolve: any, reject: any) => {
      let stocks: any[] = []
      collection.find({}).forEach(
        (doc: any) => {
          stocks.push(doc)
        },
        (err: any) => {
          if (err) reject(err)
          else {
            resolve(stocks)
          }
        }
      )
    })
  })
}

export function read (symbol: any): any {
  return connectDB().then((db: any) => {
    let collection = db.collection('stocks')
    return collection
      .findOne({ symbol: symbol })
      .then((doc: any) => {
        let stock = new Stock(doc.symbol, doc.data)
        return stock
      })
      .catch((err: any) => {
        console.error(err)
      })
  })
}

export function create (symbol: any, data: any): any {
  return connectDB().then((db: any) => {
    let stock = new Stock(symbol, data)
    let collection = db.collection('stocks')
    return collection
      .insertOne({
        symbol: symbol,
        data: data
      })
      .then(() => {
        return stock
      })
      .catch((err: any) => {
        console.error(err)
      })
  })
}

export function destroy (symbol: any): any {
  return connectDB().then((db: any) => {
    let collection = db.collection('stocks')
    return collection.findOneAndDelete({ symbol: symbol })
  })
}
