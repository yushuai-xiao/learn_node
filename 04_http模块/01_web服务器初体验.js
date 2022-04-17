const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end("Hello Server")
})

server.listen(8181, '127.0.0.1', () => {
  console.log('服务器已启动~');
})