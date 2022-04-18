const path = require('path')
// console.log(path)
const basePath = '/test/something.txt'

// 1.path.basename,返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名：

// const filePath = path.basename('/test/something.txt') //something.txt
// const filePath1 = path.basename('/test/something') //something
// const filePath2 = path.basename('/test/something.txt','.txt') //something
// console.log(filePath,filePath1,'\n',filePath2)

// 2.path.dirname(),返回路径的目录部分
const filePath3 = path.dirname('/test/something') // /test
const filePath4 = path.dirname('/test/something/file.txt') // /test/something
console.log(filePath3,'\n',filePath4)

// 3.path.extname(),返回路径的扩展名部分。
const filePath5 = path.extname('/test/something') // ''
const filePath6 = path.extname('/test/something/file.txt') //'txt'
console.log(filePath5,filePath6)

// 4.path.isAbsolute(),如果是绝对路径，则返回 true。

const filePath7 = path.isAbsolute('/test/something') //true
const filePath8 = path.isAbsolute('./test/something') //false
console.log(filePath7,filePath8)

// 5.path.join(),链接路径的两个或多个部分
const name = 'zhangsan'
const fp = path.join('/','user',name,'test.txt') // \user\zhangsan\test.txt
console.log(fp)

// 6.path.normalize(),当包含类似 .、.. 或双斜杠等相对的说明符时，则尝试计算实际的路径：
const fp1 = path.normalize('/users/joe/..//test.txt') // '\users\test.txt'
console.log(fp1)

// 7.path.parse(),解析对象的路径为组成其的片段：
/* 
  root: 根路径。
  dir: 从根路径开始的文件夹路径。
  base: 文件名 + 扩展名
  name: 文件名
  ext: 文件扩展名
*/
const fp2 = path.parse('/user/test.txt')
/* 
 {
    root: '/',
    dir: '/user',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
 }
*/
console.log(fp2)

// 8.path.relative(),接受 2 个路径作为参数。 基于当前工作目录，返回从第一个路径到第二个路径的相对路径。

const fp3 = path.relative('/User/lisi','/User/lisi/test.txt') // 'test.txt'
const fp4 = path.relative('/User/lisi','/User/lisi/something/test.txt') // 'something\test.txt'
console.log(fp3,fp4)


// 9.path.resolve() **重点，可以使用 path.resolve() 获得相对路径的绝对路径计算：
/* 
  p 如果我们希望将某个文件和文件夹拼接，可以使用 path.resolve;
  p resolve函数会判断我们拼接的路径前面是否有 /或../或./；
  p 如果有表示是一个绝对路径，会返回对应的拼接路径；
  p 如果没有，那么会和当前执行文件所在的文件夹进行路径的拼接
*/
const basePath1 = 'User/lisi';
const filename = 'abc.txt';
const filepath = path.resolve(basePath1, filename);//E:\MyCode\Node\01_learn-node\05_常见的内置模块\01_path\User\lisi\abc.txt
console.log(filepath)