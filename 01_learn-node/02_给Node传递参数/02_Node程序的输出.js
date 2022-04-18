
// 1、最基本的用法，打印到控制台
// console.log(process.argv[2])
// console.log(process.argv[3])

// 2、清空控制台
// console.clear()

// process.argv.forEach(item => {
//   console.log(item)
// })
// const x = 1
// const y = 2
// const z = 3

// 3、计数(打印多少次了)
// console.count(
//   'x的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'x的值为 ' + x + ' 且已经检查了几次？'
// )

// console.count(
//   'y 的值为 ' + y + ' 且已经检查了几次？'
// )

// function foo(){
//     bar()
// }

// function bar(){
//   // 4、打印堆栈踪迹
//   console.trace()
// }
// foo()

// 5、计算耗时，可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}

measureDoingSomething()
// 输出着色
// console.log('\x1b[33m%s\x1b[0m', '你好')

// import chalk from 'chalk';
// console.log(chalk.green('你好'))

import ProgressBar from 'progress'

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)