const http = require('http')
const url = require('url')
// 创建一个web服务器
const server = http.createServer((req,res) => {
  // 1.最基本的方式
  // console.log(req.url)
  // if(req.url === '/login'){
  //   res.end('欢迎回来~')
  // }else if(req.url === '/users'){
  //   res.end("用户列表")
  // }else{
  //   res.end("错误请求，检查")
  // }

  // /login?username=why&password=123,如果是这种格式，利用基本的方式不能获取
  const { pathname,query } = url.parse(req.url)
  if(pathname === '/login'){
    console.log(query)
    res.end("请求结果~");
  }
})
server.listen(8888,'0.0.0.0',() => {
  console.log('服务器已启动')
})