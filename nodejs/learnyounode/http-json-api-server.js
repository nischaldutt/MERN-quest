const http = require('http')
const url = require('url')

const getIsoTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

const getUnixTime = (time) => {
  return {
    unixtime: time.getTime(),
  }
}

const processQuery = (urlObj) => {
  switch(urlObj.pathname) {
    case '/api/parsetime': 
      return getIsoTime(new Date(urlObj.query.iso))
    case '/api/unixtime': 
      return getUnixTime(new Date(urlObj.query.iso))
    default: 
      return
  }
}

const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
    const urlObj = url.parse(req.url, true)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(processQuery(urlObj), null, 2))
  }
})

server.listen(process.argv[2])