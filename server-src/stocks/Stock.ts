export default class Stock {
  _id: number
  name: string
  desc: string
  data: any[]
  constructor (id: number, name: string, desc: string, data: any[]) {
    this._id = id
    this.name = name
    this.desc = desc
    this.data = data
  }
  getJSON () {
    return JSON.stringify({
      id: this._id,
      name: this.name,
      desc: this.desc,
      data: this.data
    })
  }
}
