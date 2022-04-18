define(function() {
  const tName = "zhangsan";
  const age = 18;
  const sayHello = function(name) {
    console.log("你好" + name);
  }

  return {
    tName,
    age,
    sayHello
  }
});