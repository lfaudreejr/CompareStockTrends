const isDev = window.location.port.indexOf('8080') > -1
const getHost = () => {
  const protocol = window.location.protocol
  const host = window.location.host
  return `${protocol}//${host}`
}

const socketIO = isDev ? 'http://localhost:3000/' : '/'

export default {
  BASE_URI: getHost(),
  BASE_API: socketIO
}
