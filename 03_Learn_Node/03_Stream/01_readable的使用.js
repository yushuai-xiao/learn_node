const fs = require('fs')

// 传统的方式
// fs.readFile('./foo.txt',(err,data) => {
//   // <Buffer 74 68 69 73 20 69 73 20 74 65 73 74 20 53 74 72 65 61 6d>
//   console.log(data.toString())
// })  

// 流的方式读取
const reader = fs.createReadStream('./foo.txt',{
  start:3,
  end:10,
  highWaterMark:2
})

// 数据读取的过程
reader.on('data',(data) => {
  console.log(data);
 
  // 暂停读取
  reader.pause()
  
  setTimeout(()=>{
    // 继续读取
    reader.resume()
  },1000)
})

reader.on('open',() => {
  console.log('文件被打开')
})

reader.on('close',() => {
  console.log('文件被关闭')
})