import * as types from '../mutation-types'

const state = {
  stocks: []
}

const getters = {
  getStocks: state => state.stocks
}

const actions = {
  addStock ({commit}, stock) {
    commit(types.ADD_STOCK, stock)
  },
  removeStock ({commit}, stock) {
    commit(types.REMOVE_STOCK, stock)
  }
}

const mutations = {
  [types.ADD_STOCK] (state, stock) {
    state.stocks.push(stock)
  },
  [types.REMOVE_STOCK] (state, stock) {
    const index = state.stocks.indexOf(stock)
    state.stocks.splice(index, 0)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
