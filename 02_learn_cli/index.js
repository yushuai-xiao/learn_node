#!/usr/bin/env node
const program = require('commander')

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create');
program.version(require('./package.json').version)

// 帮助和可选信息
helpOptions();

// 创建其他指令
createCommands()

// 解析参数
program.parse(process.argv)