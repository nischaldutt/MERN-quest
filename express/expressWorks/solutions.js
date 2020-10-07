// hello world
const express = require('express')
const app = express()
app.get('/home', (req, res) => {
  res.end('Hello World!')
})
app.listen(process.argv[2])

// static
const express = require('express')
const app = express()
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])

// pug
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', process.argv[3])
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() })
})
app.listen(process.argv[2])


// good old form
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/form', (req, res) => {
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2], (err) => console.log(err))

// stylish css
const express = require('express')
const stylus = require('stylus')

const app = express()
app.use(express.static(process.argv[3] || path.join(__dirname + 'public')))
app.use(stylus.middleware(process.argv[3] || path.join(__dirname + 'public')))
app.listen(process.argv[2])

// param pam pam
const express = require('express')
const crypto = require('crypto')

const app = express()
app.put('/message/:id', (req, res) => {
  res.send(crypto.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'))  
})
app.listen(process.argv[2])

// what's in query
const express = require('express')
const app = express()

app.get('/search', (req, res) => {
  res.send(req.query)
})
app.listen(process.argv[2])

// json me
const express = require('express')
const fs = require('fs')

const app = express()
let result
app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], 'utf8', (err, data) => {
    result = JSON.parse(data)
    res.json(result)
  })
})
app.listen(process.argv[2])