function stockEvents (socketParam: any) {
  /**
   * Socket Handler to add/retreive/delete stocks
   */
  const stockSocket = socketParam.of('/stocks')
  stockSocket.on('connection', onConnect)
}

function onConnect (socket: any) {
  /**
   * Handle on connection event
   */
  console.log('Socket', socket.id)
  socket.emit('connected', JSON.stringify('Hello'))
}

export default stockEvents
