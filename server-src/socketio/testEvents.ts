import * as mongo from './../mongoDB/stocksMongo'

function testEvents (socketParam: any) {
  /**
   * Testing Socket handler
   */
  const socketTest = socketParam.of('/test')
  socketTest.on('connection', onConnect)
  socketTest.on('disconnect', () => {
    console.log('Client disconnected')
  })
}

async function onConnect (socket: any) {
  /**
   *  Socket handler
   */
  console.log(`Connected to Socket ${socket.id}`)
  const stocks = await mongo.readAll()
  socket.emit('connected', JSON.stringify(stocks))
  socket.on('search', handleSearch)
}

function handleSearch (data: any) {
  /**
   *  Socket handler stock search from client
   */
  console.log(`Searching for ${data}`)
}

export default testEvents
