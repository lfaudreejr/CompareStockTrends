export default class Stock {
  id: number
  symbol: string
  data: any[]
  constructor (id: number, symbol: string, data: any[]) {
    this.id = id
    this.symbol = symbol
    this.data = data
  }
  getJSON () {
    return JSON.stringify({
      id: this.id,
      name: this.symbol,
      data: this.data
    })
  }
}
