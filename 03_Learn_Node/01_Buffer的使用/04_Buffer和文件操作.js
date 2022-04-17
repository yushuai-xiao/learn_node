const fs = require('fs')
const sharp = require('sharp')
//读取的文件本质上是<Buffer e4 bd a0 e5 a5 bd e5 95 8a ef bc 8c e6 9d 8e e9 93 b6 e6 b2 b3>
// 可以设置指定的编码
//读取文本文件
// fs.readFile('./foo.txt', { encoding: 'utf8' }, (err, data) => {
//   console.log(data);
//   // 或者
//   // console.log(data.toString());
// })

// fs.readFile('./QHSN.jpg', (err, data) => {
//   console.log(data);
//   fs.writeFile('./sn.jpg', data, err => {
//     console.log(err);
//   })
// })

// sharp库的使用
// sharp('./sn.jpg')
//   .resize(600, 600)
//   .toFile('baz.jpg')

sharp('./sn.jpg')
  .resize(800, 800)
  .toBuffer()
  .then(data => {
    fs.writeFile('bax.jpg', data, err => {
      console.log(err);
    })
  })
