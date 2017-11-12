import * as EventEmitter from 'events'

class StockEmitter extends EventEmitter {
  stockRead (stock: any) {
    console.log('Reading stocks')
    this.emit('stockread', stock)
  }
  stockCreated (stock: any) {
    this.emit('stockcreated', stock)
  }
  stockDestroy (stock: any) {
    this.emit('stockdestroy', stock)
  }
}

export default new StockEmitter()
