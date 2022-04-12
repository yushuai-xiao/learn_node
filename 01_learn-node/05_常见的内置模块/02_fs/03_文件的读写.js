const fs = require('fs')
// 1.文件写入

/* 
  r  打开文件用于读取
  r+ 打开文件用于读写。
  w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
  a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
  a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
*/
const content = '\n你好啊，李银河'
// fs.writeFile('./abc.txt',content,{flag:'a'},(err,data) => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// 将内容追加到文件末尾的便捷方法是 fs.appendFile()（及其对应的 fs.appendFileSync()）：
// fs.appendFile('./abc.txt',content,err => {
//   if(err){
//     console.error(err)
//     return
//   }
//   console.log("添加完成")
// })

// 2.文件读取
fs.readFile('./02_文件描述符.js','utf8',(err,data) => {
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})
