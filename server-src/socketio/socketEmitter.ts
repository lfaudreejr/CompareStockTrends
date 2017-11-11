function stockSocket (socketParam: any) {
  const socketTest = socketParam.of('/test')

  socketTest.on('connection', (socket: any) => {
    console.log('Client connected', socket.id)
    socket.emit('connected', `Connected to Socket ${socket.id}`)
  })
  socketTest.on('disconnect', () => {
    console.log('Client disconnected')
  })
}

export default stockSocket
