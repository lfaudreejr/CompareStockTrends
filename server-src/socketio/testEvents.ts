import mongo from './../mongoDB/'
import quandlApi from '../quandlApi/'

/**
   * Testing Socket handler
   */
function testEvents (socketParam: any) {
  const socketTest = socketParam.of('/test')
  socketTest.on('connection', async (socket: any) => {
    const stocks = await mongo.readAll()
    stocks.forEach((stock: any) => {
      socket.emit('connected', stock)
    })

    socket.on('search', (data: any) => {
      const search = handleSearch(data)
      search.then((results: any) => {
        socket.broadcast.emit('results', results)
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
function handleSearch (data: any) {
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
