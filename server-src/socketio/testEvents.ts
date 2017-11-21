import mongo from './../mongoDB/'
import quandlApi from '../quandlApi/'

/**
   * Testing Socket handler
   */
function testEvents (socketParam: SocketIO.Server) {
  const socketTest = socketParam.of('/test')
  socketTest.on('connection', async (socket: SocketIO.Socket) => {
    const stocks = await mongo.readAll()
    stocks.forEach((stock: any) => {
      socket.emit('connected', stock)
    })
    socket.emit('done')

    socket.on('search', (data: string) => {
      const search = handleSearch(data)
      search.then((results: any) => {
        socket.emit('results', results)
      })
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
      let { id, dataset_code, data } = results.data.dataset

      let stock = await mongo.read(id)

      if (stock) {
        return stock
      } else {
        stock = mongo.create(id, dataset_code, data)
        return stock.then((createdStock: any) => {
          return createdStock
        })
      }
    })
    .catch((err: Error) => {
      throw new Error('Error in handleSearch')
    })
}

export default testEvents
