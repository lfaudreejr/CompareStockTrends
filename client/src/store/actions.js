import * as types from './mutation-types'

export default {
  setConnection: ({commit}, path) => {
    commit(types.CONNECTION_SET, path)
  },
  endConnection: ({commit}) => {
    commit(types.CONNECTION_END)
  },
  addStock: ({commit}, stock) => {
    commit(types.ADD_STOCK, stock)
  },
  removeStock: ({commit}, stock) => {
    commit(types.REMOVE_STOCK, stock)
  }
}
