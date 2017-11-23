import * as mongo from 'mongodb'
import config from '../config'
import Stock from './../stocks/Stock'
import StockEmitter from './../stocks/stockEmitter'
import { ResolveOptions } from 'dns'

const MongoClient: mongo.MongoClient = mongo.MongoClient

const URL: string = config.mongoUrl
let db: mongo.Db

export function connectDB (): any {
  return new Promise((resolve, reject) => {
    if (db) return resolve(db)

    MongoClient.connect(URL, (err: Error, _db: mongo.Db) => {
      if (err) return reject(err)
      db = _db
      resolve(_db)
    })
  })
}

export function readAll (): any {
  return connectDB().then((db: mongo.Db) => {
    let collection: mongo.Collection = db.collection('stocks')
    return new Promise((resolve, reject) => {
      let stocks: any[] = []
      collection.find({}).forEach(
        (doc: mongo.CursorResult) => {
          stocks.push(doc)
        },
        (err: Error) => {
          if (err) reject(err)
          else {
            resolve(stocks)
          }
        }
      )
    })
  })
}

export function read (id: number): any {
  return connectDB().then((db: mongo.Db) => {
    let collection: mongo.Collection = db.collection('stocks')
    return collection
      .findOne({ id: id })
      .then((doc: mongo.CursorResult) => {
        if (doc) {
          let stock = new Stock(doc.id, doc.name, doc.desc, doc.data)
          return stock
        } else {
          return null
        }
      })
      .catch((err: Error) => {
        console.error(err)
      })
  })
}

export function create (id: number, name: string, desc: string, data: any[]): any {
  return connectDB().then((db: mongo.Db) => {
    let stock = new Stock(id, name, desc, data)
    let collection: mongo.Collection = db.collection('stocks')
    return collection
      .insertOne(stock)
      .then(() => {
        return stock
      })
      .catch((err: Error) => {
        console.error(err)
      })
  })
}

export function destroy (id: number): any {
  return connectDB().then((db: mongo.Db) => {
    let collection: mongo.Collection = db.collection('stocks')
    return collection.findOneAndDelete({ _id: id })
  })
}
