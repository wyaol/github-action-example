const http = require('http')

const hostname = '0.0.0.0'
const port = 3015

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('welcome to www.aaa.com\n')
})

server.listen(port, hostname, () => {
  console.log(`please visit http://${hostname}:${port}/`)
})
