const http = require('http')

const url = process.argv[2];
let result = '';

http.get(url, (response) => {
  response.on('data', (chunk) => {
    result += chunk;
  })
  response.on('end', () => {
    console.log(result.length)
    console.log(result)
  })
  response.on('error', console.error)
}).on('error', console.error)