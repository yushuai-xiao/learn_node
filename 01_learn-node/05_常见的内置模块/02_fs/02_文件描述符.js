const fs = require('fs')
// 在与位于文件系统中的文件进行交互之前，需要先获取文件的描述符。
fs.open("./abc.txt",'r+',(err,fd) => {
  if(err){
    console.log(err)
    return
  }

  // 通过描述符去获取文件的信息
  fs.fstat(fd,(err,info) => {
    console.log(info)
  })
})