const message = '你好啊'
const buffer = Buffer.from(message);//默认一个汉字三个字节
// console.log(buffer); //<Buffer e4 bd a0 e5 a5 bd e5 95 8a> 中文一个字占三个字节

// const buffer = Buffer.from(message, 'utf16le') //utf16一个汉字占两个字节，如果是繁体显式会有为题
// console.log(buffer);//<Buffer 60 4f 7d 59 4a 55>

// 对字节进行解码：utf8
console.log(buffer.toString()); //你好啊


// 2.编码使用过utf16le,解码使用utf8
const buffer1 = Buffer.from(message, 'utf16le')
console.log(buffer1);
console.log(buffer1.toString());//`O}YJU ,这样会出现乱码
// 可以使用相同的编码，进行解码
console.log(buffer1.toString('utf16le'));//你好啊