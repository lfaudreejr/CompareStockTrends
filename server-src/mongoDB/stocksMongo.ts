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

export function read (id: any): any {
  return connectDB().then((db: any) => {
    let collection = db.collection('stocks')
    return collection
      .findOne({ id: id })
      .then((doc: any) => {
        if (doc) {
          let stock = new Stock(doc.id, doc.name, doc.desc, doc.data)
          return stock
        } else {
          return null
        }
      })
      .catch((err: any) => {
        console.error(err)
      })
  })
}

export function create (id: number, name: any, desc: string, data: any): any {
  return connectDB().then((db: any) => {
    let stock = new Stock(id, name, desc, data)
    let collection = db.collection('stocks')
    return collection
      .insertOne(stock)
      .then(() => {
        return stock
      })
      .catch((err: any) => {
        console.error(err)
      })
  })
}

export function destroy (id: any): any {
  return connectDB().then((db: any) => {
    let collection = db.collection('stocks')
    return collection.findOneAndDelete({ _id: id })
  })
}
