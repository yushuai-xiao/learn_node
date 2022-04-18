// 加载过程是同步
require('./bar');
require('./foo');


// 等上面的加载好了，主文件中的内容才会执行
console.log("main中的代码被执行");

