import axios from 'axios'

function get (url: string): any {
  return axios.get(url)
}

export default get
