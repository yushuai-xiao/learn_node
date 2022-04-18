const program = require('commander')
const helpOptions = () => {
  // 增加自己的options
  program.option('-t --tc_xs', 'a xs_vue cli');
  program.option('-d --dest <dest>', 'a destination folder,Example:-d /src/components');
  program.option('-f --framework <framework>', 'your frameword')

  program.on('--help', function () {
    console.log('Other options');
  })
}

module.exports = helpOptions