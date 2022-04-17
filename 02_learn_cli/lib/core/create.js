const program = require('commander')

const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
} = require('./actions')

const createCommands = () => {
  // create vue template
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  // create vue component
  program
    .command('addcpn <name>')
    .description('add vue component,Example: tcxs addcpn HelloWorld [-d src/components]')
    .action((name) => {
      addComponentAction(name, program.dest || 'src/components')
    })

  // create vue component and router
  program
    .command('addpage <page>')
    .description('add vue page and router config, Example: tcxs addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.dest || 'src/pages')
    })

  // create store
  program
    .command('addstore <store>')
    .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
    .action((store) => {
      addStoreAction(store, program.dest || 'src/store/modules')
    })
}

module.exports = createCommands;