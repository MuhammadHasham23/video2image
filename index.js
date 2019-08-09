const { fork } = require('child_process');
const forked = fork('childProcess.js');
const chalk = require('chalk');

const log = console.log;

forked.on('message', ({ msg }) => {
  log(chalk.bold.green(msg));
  process.exit();
});

forked.send({ path: process.argv[2], outputTo: process.argv[3] });



