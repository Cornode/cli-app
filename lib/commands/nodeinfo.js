'use strict';

const chalk = require('chalk');
const prettyjson = require('prettyjson');

const setupNodeInfoCommand = (data, cornodejs, vorpal) => {
  vorpal
    .command('nodeinfo', 'Shows connected node information.')
    .action((args, callback) => {
      cornodejs.api.getNodeInfo((err, data) => {
        if (err) {
          vorpal.log(chalk.red(err));
          data.currentNodeInfo = undefined;
          return callback();
        }

        delete data.duration;
        vorpal.log(prettyjson.render(data));
        callback();
      });
    });

};

module.exports = setupNodeInfoCommand;
