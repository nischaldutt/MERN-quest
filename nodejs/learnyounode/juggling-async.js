const http = require('http')
const bl = require('bl')

const result = []
const getResponse = (url, index) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if(err) throw err
      //console.log(data.toString())
      result[index] = data.toString()
      if(index === 4) result.map(res => console.log(res))
    }))
  })
}

process.argv.map((url, index) => {
  //console.log('calling == ' + index)
  if(index >= 2) getResponse(url, index)
})