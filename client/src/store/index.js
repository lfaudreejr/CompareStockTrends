import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// import stocks from './modules/stocks'
// import socket from './modules/socket'

Vue.use(Vuex)

const state = {
  stocks: [],
  connection: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
  // modules: {
  //   stocks,
  //   socket
  // }
})
