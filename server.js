const http = require('http')
const app = require('./app')

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const port = isNumeric(process.argv[ process.argv.length-1 ]) ? process.argv[ process.argv.length-1 ] : 3000
const server = http.createServer(app)

server.listen( port, () => console.info(`server started at port ${port}`) )
