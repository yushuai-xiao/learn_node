console.log(process.argv)
let argArr = {}
let temp
for(let i = 2;i < process.argv.length;i++){
  // 对参数进行处理
  temp = process.argv[i].split('=')
  argArr[temp[0]] = temp[1]
}


