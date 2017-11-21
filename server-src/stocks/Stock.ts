export default class Stock {
  _id: number
  name: string
  data: any[]
  constructor (id: number, name: string, data: any[]) {
    this._id = id
    this.name = name
    this.data = data
  }
  getJSON () {
    return JSON.stringify({
      id: this._id,
      name: this.name,
      data: this.data
    })
  }
}
