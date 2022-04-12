const fs = require('fs')
const path = require('path')

// 1.创建文件夹
const dirname = './lisi'

// if(!fs.existsSync(dirname)){
//   fs.mkdir(dirname,err => {
//     console.log(err)
//   })
// }

// 2.读取文件夹中的所有文件
// fs.readdir(dirname,(err,files) => {
//   console.log(files)
// })

// 读取文件夹中的所有文件
function getFiles(dirname){
  fs.readdir(dirname,{withFileTypes: true },(err,files) => {
    for(let file of files){
      if(file.isDirectory()){
        console.log(file)
        const filepath = path.resolve(dirname,file.name);
        getFiles(filepath)
      }else{
        console.log(file.name)
      }
    }
  })
}
getFiles(dirname);

// 3.重命名
// fs.rename('./kobe','./lisi',err => {
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log('Rename complete!');
// })
// try {
//   fs.renameSync('./kobe','./lisi')
// } catch (error) {
//   fs.renameSync('./kobe','./lisi')
// }