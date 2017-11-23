import * as EventEmitter from 'events'
import Stock from '../stocks/Stock'

class StockEmitter extends EventEmitter {
  stockRead (stock: Stock) {
    console.log('Reading stocks')
    this.emit('stockread', stock)
  }
  stockCreated (stock: Stock) {
    this.emit('stockcreate', stock)
  }
  stockDestroy (stock: Stock) {
    this.emit('stockdestroy', stock)
  }
}

export default new StockEmitter()
