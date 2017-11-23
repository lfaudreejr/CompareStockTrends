import * as types from '../mutation-types'
import setSocket from '../../socketio/socket'

const state = {
  connection: null
}

const getters = {
  getSocket: state => state.connection
}

const actions = {
  getConnection ({commit}, path) {
    commit(types.CONNECTION_GET, path)
  },
  endConnection ({commit}) {
    commit(types.CONNECTION_END)
  }
}

const mutations = {
  [types.CONNECTION_GET] (state, path) {
    console.log('SET SOCKET', state, path)
    state.connection = setSocket(path)
  },
  [types.CONNECTION_END] (state) {
    state.connection = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
