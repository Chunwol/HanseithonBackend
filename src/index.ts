import app from './app'
import  * as http from 'http'
import  * as ConnectionOptions from './config/ormConfig'
import { 
  webPort, webHost
} from './config/env'
import { 
  createConnection
} from 'typeorm'
import  * as dotenv from "dotenv"
 import { 
  blobService
 } from './config/blobConfig';
dotenv.config()
console.log(ConnectionOptions);
createConnection(ConnectionOptions)
  .then(conn => {
    const port = normalizePort(webPort);
    app.set('port', port)
    const server = http.createServer(app)
    console.log(port)
    server.listen(Number(port), webHost)
    server.on('listening', onListening)
    function onListening() {
      const addr = server.address()
      if (!addr) return
      const bind = typeof addr === 'string' ? 'pipe ' + addr : addr.port
      console.log('[@] Complete.')
      console.log('[@] host: ' + addr.address)
      console.log('[@] port: ' + bind)
    }
  })
  .catch(e => {
    console.log('[!] Database connection failed')
    console.log('[!] ' + e.sqlMessage)
    console.log('[!] Code: ' + e.code)
  })

function normalizePort(val: string) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}