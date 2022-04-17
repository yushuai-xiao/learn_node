const name = 'zhangsan'
const age = 18

let message = "my name is zhangsan"

function foo() {
  console.log("this is foo function");
}


exports.name = name
exports.age = age
exports.message = message

exports.foo = foo
setTimeout(() => {
  console.log(exports.name);
}, 1000)

module.exports = {
  name: 'wangwu',
  age: 20,
  message: 'this is test'
}
/* 
 在node中本质上是导出的module.exports(module.exports = exports)
 一旦对module.exports重新赋值，那么导出的是赋值的对象，
 为什么Node中有exports这个导出对象,因为Node遵循commonjs规范,
 commonjs规范中只有exports概念
*/