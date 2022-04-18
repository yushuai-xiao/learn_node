const http = require('http')
const fs = require('fs')

// 普通
// const server = http.createServer(function(req, res) {
//   fs.readFile(__dirname + '/data.txt', (err, data) => {
//     res.end(data)
//   })
// })

// 流操作
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000,()=>{
  console.log('服务已启动！')
})