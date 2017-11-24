export default {
  getSocket: (state) => state.connection,
  getStocks: (state) => state.stocks,
  getLoading: (state) => state.loading
}
