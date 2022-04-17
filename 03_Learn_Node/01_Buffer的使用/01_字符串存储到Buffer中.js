const message = 'Hello';
// 1.创建方式一：不推荐(过期)
// const buffer = new Buffer(message)
// console.log(buffer); // <Buffer 48 65 6c 6c 6f>

// 2.创建方式二：
const buffer = Buffer.from(message)
console.log(buffer); //<Buffer 48 65 6c 6c 6f>