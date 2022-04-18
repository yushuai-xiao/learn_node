const fs = require('fs')
const path = require('path')

const srcDir = process.argv[2]
const destDir = process.argv[3]

// 自动化拷贝.pdf文件到指定文件夹
function getPDF(srcDir,destDir){
  // 读取源文件夹中的文件
  const srcFiles = fs.readdirSync(srcDir,{withFileTypes: true })
  // 判断指定文件夹是否存在，不存在就创建
  if(!fs.existsSync(destDir)) fs.mkdirSync(destDir);
  // 便利源文件夹
  for(let file of srcFiles){
    // 如果还是文件夹,就递归
    if(file.isDirectory()){
      const filepath = path.resolve(srcDir,file.name)
      getPDF(filepath,destDir)
    }else{
      // 判断进行拷贝
      if(file.name.endsWith('.pdf')){
        const srcFile = path.resolve(srcDir,file.name)
        const destFile = path.resolve(destDir,file.name)
        fs.copyFileSync(srcFile,destFile)
        console.log(file.name,'拷贝成功')
      }
    }
  }
}

getPDF(srcDir,destDir)
