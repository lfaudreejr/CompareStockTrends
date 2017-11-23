import * as mongo from './stocksMongo'

export default {
  connectDB: mongo.connectDB,
  readAll: mongo.readAll,
  read: mongo.read,
  create: mongo.create,
  destroy: mongo.destroy
}
