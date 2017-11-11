import io from 'socket.io-client'
import ENV from './config'

export default function setSocket (path) {
  return io(`${ENV.BASE_API}${path}`)
}
