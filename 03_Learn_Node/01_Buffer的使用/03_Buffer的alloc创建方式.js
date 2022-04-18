// 通过alloc的方式创建Buffer,创建指定内存位数
const buffer = Buffer.alloc(8)
console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00>

buffer[0] = 88 //把第一位赋值
buffer[1] = 0x88
console.log(buffer);