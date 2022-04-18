const bar = require('./bar')

console.log(bar.name);
console.log(bar.age);
console.log(bar.message);

bar.name = 'lisi'
setTimeout(() => {
  console.log(bar.name);
}, 200)

// Node中实现commonjs的本质就是对象的引用赋值
// const { name, age, message } = require('./bar')

// console.log(name);
// console.log(age);
// console.log(message);

// 

