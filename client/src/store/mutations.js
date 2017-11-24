import * as types from './mutation-types'
import setSocket from '../socketio/socket'

export default {
  [types.CONNECTION_SET] (state, path) {
    state.connection = setSocket(path)
  },
  [types.CONNECTION_END] (state) {
    state.connection = null
  },
  [types.ADD_STOCK] (state, stock) {
    let stateTest = state.stocks.every((val) => val._id !== stock._id)
    if (stateTest) {
      state.stocks.push(stock)
    }
  },
  [types.REMOVE_STOCK] (state, stock) {
    let stateCopy = state.stocks.map((x) => x)

    function find (el) {
      return el.name === stock.name
    }

    let index = stateCopy.findIndex(find)

    stateCopy.splice(index, 1)
    state.stocks = stateCopy
  },
  [types.LOADING] (state, val) {
    state.loading = val
  }
}
