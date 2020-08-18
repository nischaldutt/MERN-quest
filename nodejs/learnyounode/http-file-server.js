const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filePath = process.argv[3]

const readFile = (filePath) => {
  return fs.createReadStream(filePath, 'utf8');
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  const src = readFile(filePath)
  src.pipe(res)
})

server.listen(port)