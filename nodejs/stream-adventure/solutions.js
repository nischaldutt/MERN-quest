const http         = require('http')
const fs           = require('fs')
const { Readable } = require('stream')
const through      = require('through2')
const split        = require('split')
const concat       = require('concat-stream')
const WebSocket    = require('ws')
const trumpet      = require('trumpet')
const { spawn }    = require('child_process')
const duplexer     = require('duplexer2')
const combine      = require('stream-combiner')
const zlib         = require('zlib')
const crypto       = require('crypto')
const tar          = require('tar')

// Exercise: meet pipe
fs.createReadStream(process.argv[2]).pipe(process.stdout)


// Exercise: input output
process.stdin.pipe(process.stdout)


// Exercise: read it
const myStream = new Readable({})
myStream._read = () => {}
myStream.push(process.argv[2])
myStream.pipe(process.stdout)


// Exercise: transform
function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}
function end(done) {
  done()
}
const stream = through(write, end)
process.stdin.pipe(stream).pipe(process.stdout)


// Exercise: lines
let count = 1;
process.stdin.pipe(split()).pipe(through(function(buffer, encoding, next) {
  if(count % 2 === 0) 
    this.push(buffer.toString().toUpperCase() + '\n')
  else 
    this.push(buffer.toString().toLowerCase() + '\n')
  count++;
  next()
})).pipe(process.stdout)


// Exercise: concat
process.stdin.pipe(concat(function(buffer) {
  process.stdout.write(buffer.toString().split('').reverse().join(''))
}))


// Exercise: http server
const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    req.pipe(through(function(buffer, encoding, next) {
      this.push(buffer.toString().toUpperCase())
      next()
    })).pipe(res)
  }
  else 
    res.end()
})
server.listen(process.argv[2])


// Exercise: http client
const reqOptions = { method: 'POST' }
const req = http.request("http://localhost:8099", reqOptions, (res) => {
  res.pipe(process.stdout)
})
process.stdin.pipe(req)

// Exercise: websocket
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)
stream.write('hello\n')
stream.pipe(process.stdout)

// Exercise: html stream
const tr = trumpet()
const stream = tr.select('.loud').createStream()
stream.pipe(through(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
})).pipe(stream)
process.stdin.pipe(tr).pipe(process.stdout)

// Exercise: duplexer
module.exports = (cmd, args) => {
  const child = spawn(cmd, args)
  return duplexer(child.stdin, child.stdout)
}

// Exercise: duplexer redux
module.exports = (counter) => {
  const obj = {}
  const write = (row, encoding, next) => {
    obj[row.country] = (obj[row.country] || 0) + 1
    next()
  }
  const end = (done) => {
    counter.setCounts(obj)
    done()
  }
  const data = through(write, end)
  return duplexer({ objectMode: true }, data, counter)
}

// Exercise: combiner
module.exports = () => {
  let current
  function write(buffer, encoding, next) {
    if(buffer.length === 0) return next()
    let row = JSON.parse(buffer)

    if(row.type === 'genre') {
      if(current)
        this.push(JSON.stringify(current) + '\n')
      current = { name: row.name, books: [] }
    }
    else if(row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }
  function end(done) {
    if(current) 
      this.push(JSON.stringify(current) + '\n')
    done()
  }

  let obj = through(write, end)
  return combine(split(), obj, zlib.createGzip())
}

// Exercise: crypt
process.stdin
.pipe(crypto.createDecipher('aes256', process.argv[2]))
.pipe(process.stdout)

// // Exercise: secretz
const parser = new tar.Parse()
parser.on('entry', function(e) {
  if(e.type !== 'File') return

  const hash = crypto.createHash('md5', { encoding: 'hex' })
  e.pipe(hash).pipe(concat(function(hash) {
    console.log(hash + ' ' + e.path + '\n')
  }))
})
// combine(process.stdin, crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]), zlib.createGunzip(), parser)
process.stdin
  .pipe(crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]))
  .pipe(zlib.createGunzip())
  .pipe(parser)