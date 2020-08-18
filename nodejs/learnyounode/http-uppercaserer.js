const http = require('http')
const map = require('through2-map')

const processData = map((chunk) => {
  return chunk.toString().toUpperCase();
})

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    req.pipe(processData).pipe(res)
  }
})

server.listen(process.argv[2])