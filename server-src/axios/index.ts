import axios, { AxiosPromise } from 'axios';

function get (url: string): AxiosPromise {
  return axios.get(url);
}

export default get;
