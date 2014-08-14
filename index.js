'use strict';

var chalk = require('chalk');

module.exports = [{
  name: 'emerg',
  code: 0,
  color: chalk.bgRed.bold.white,
}, {
  name: 'alert',
  code: 1,
  color: chalk.bgRed.white,
}, {
  name: 'crit',
  code: 2,
  color: chalk.bgRed.black,
}, {
  name: 'error',
  code: 3,
  color: chalk.red,
}, {
  name: 'warning',
  code: 4,
  color: chalk.bold.yellow,
}, {
  name: 'notice',
  code: 5,
  color: chalk.yellow,
}, {
  name: 'info',
  code: 6,
  color: chalk.white,
}, {
  name: 'debug',
  code: 7,
  color: chalk.gray
}];
