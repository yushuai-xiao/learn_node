console.log(global)

var tName = "zhangsan";
console.log(tName);
// 不会像浏览器一样，加到window上
console.log(global.tName);

// console.log(global.process);