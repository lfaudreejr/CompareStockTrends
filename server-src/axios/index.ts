import axios from 'axios'
import * as _ from 'ramda'

function get (url: string): any {
  return axios.get(url)
}

export default get
