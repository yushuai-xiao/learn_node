const http = require('http')

// 1.利用http.createServer()创建

const server1 = http.createServer((req, res) => {
  res.end("server1 infomation")
})

server1.listen(8000, () => {
  console.log("server1 is running");
})

// 2.利用http.Server()类创建，本质上是一一样的，creteServer()调用的就是Server()；类

const server2 = new http.Server((req, res) => {
  res.end('server2+ infomation')
})

server2.listen(8001, () => {
  console.log("server2 is running");
})