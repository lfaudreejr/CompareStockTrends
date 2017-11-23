import mongo from './../mongoDB/'
import quandlApi from '../quandlApi/'
import Stock from '../stocks/Stock'

/**
   * Testing Socket handler
   */
function testEvents (socketParam: SocketIO.Server) {
  const socketTest = socketParam.of('/test')
  socketTest.on('connection', async (socket: SocketIO.Socket) => {
    const stocks = await mongo.readAll()
    stocks.forEach((stock: Stock) => {
      socket.emit('connected', stock)
    })

    socket.on('search', (data: string) => {
      const search = handleSearch(data)
      search.then((results: object) => {
        socket.broadcast.emit('results', results)
      })
    })

    socket.on('removeStock', (stock: Stock) => {
      mongo.destroy(stock._id)
      socket.broadcast.emit('stockRemoved', stock)
    })
  })
  socketTest.on('disconnect', () => {
    console.log('Client disconnected')
  })
}

/**
   *  Socket handler stock search from client
   */
function handleSearch (data: string) {
  const get = quandlApi.getStock(data, '2017')

  return get
    .then(async (results: any) => {
      let { id, dataset_code, name, data } = results.data.dataset

      let stock = await mongo.read(id)

      if (stock) {
        return stock
      } else {
        stock = mongo.create(id, dataset_code, name, data)
        return stock.then((createdStock: Stock) => {
          return createdStock
        })
      }
    })
    .catch((err: Error) => {
      throw new Error('Error in handleSearch')
    })
}

export default testEvents
