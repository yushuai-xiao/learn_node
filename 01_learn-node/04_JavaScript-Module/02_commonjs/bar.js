// node中每个js文件就是一个模块

// 1.模块内部定义东西
const tName = 'lisi'
const age = 18 
let message = 'this is test message'

function sayHello(){
  console.log('hello everyBody')
}

// 2.测试其他地方修改，会不会影响
setTimeout(()=>{
  // exports.tName = 'james'
  // 当其他地方修改时，这里也会进行相应的修改
  console.log('bar',exports.tName)
},1000)

// 3.测试这里修改，其他地方会不会影响
setTimeout(()=>{
  exports.age = 20
},500)

// 通过exports导出内容
exports.tName = tName
exports.age = age 
exports.sayHello = sayHello

/* 
  本质上导出的是一个对象，双方任意一方修改都会，影响彼此，更能证明导入的对象，只是对导出对象的引用赋值,
  在node中是module.exports在导出，只不过，module.exports = exports
*/

module.exports = {

}

// exports和module.exports之间有什么关系呢?
// 导出一个新的对象, 对导出的内容的影响: 不带exports玩了
// module.exports = {

// };
