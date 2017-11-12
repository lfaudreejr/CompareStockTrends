export default class Stock {
  symbol: string
  data: any[]
  constructor (symbol: string, data: any[]) {
    this.symbol = symbol
    this.data = data
  }
  getJSON () {
    return JSON.stringify({
      name: this.symbol,
      data: this.data
    })
  }
}
