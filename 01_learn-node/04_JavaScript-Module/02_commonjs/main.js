const bar = require('./bar')


// 1.打印导入的模块
console.log(bar)

// 2.修改导入对象中的内容
setTimeout(()=>{
  bar.tName = 'kobe'
},500)

// 3.导入源模块修改，这里也会修改
setTimeout(()=>{
  console.log('main',bar.age)
},1000)