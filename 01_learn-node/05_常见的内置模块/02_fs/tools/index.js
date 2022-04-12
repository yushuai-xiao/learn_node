const fs = require('fs')
const path = require('path')

const srcDir = process.argv[2]
const destDir = process.argv[3]

// 自动化拷贝.pdf文件到指定文件夹
function getPDF(srcDir,destDir){
  const srcFiles = fs.readdirSync(srcDir,{withFileTypes: true })
  if(!fs.existsSync(destDir)) fs.mkdirSync(destDir);
  for(let file of srcFiles){
    if(file.isDirectory()){
      const filepath = path.resolve(srcDir,file.name)
      getPDF(filepath,destDir)
    }else{
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
