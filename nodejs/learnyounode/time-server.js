const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]

const zeroFill = (val) => (val < 10) ? '0' + val : val;

const server = net.createServer((socket) => {
  const date = new Date();
  let format = '';
  format += date.getFullYear() + '-'
  format += zeroFill(date.getMonth() + 1) + '-'
  format += zeroFill(date.getDate()) + ' '
  format += zeroFill(date.getHours()) + ':'
  format += zeroFill(date.getMinutes()) + '\n'

  socket.write(format)
  // socket.write(strftime('%F %H:%M', new Date()))
  socket.end()
})

server.listen(port)