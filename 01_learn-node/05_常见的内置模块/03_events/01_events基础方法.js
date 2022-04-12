const EventEmitter = require('events')

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// addListener是on的alias简写
emitter.on('click',(args1,args2) => {
  console.log("监听到1click事件",args1,args2)
})

const listener2 = (args1,args2) => {
  console.log("监听到2click事件",args1,args2)
}
emitter.on('click',listener2)

// 3.发出一个事件
setTimeout(()=>{
  emitter.emit('click','zhangsan',18)
  emitter.off("click", listener2);
  emitter.emit('click','zhangsan',18)
},2000)