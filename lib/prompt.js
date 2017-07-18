'use strict';

const chalk = require('chalk');
const collapsecornodeAmount = require('./utils').collapsecornodeAmount;

let data, cornodejs, vorpal;
let delimiterPaused = false;

const setupPrompt = (d, i, v) => {
  data = d;
  cornodejs = i;
  vorpal = v;
  setDelimiter();
};

const pauseDelimiter = () => delimiterPaused = true;
const unpauseDelimiter = () => delimiterPaused = false;

const setDelimiter = () => {
  if (delimiterPaused) {
    return;
  }

  const info = data.currentNodeInfo;

  let status = chalk.red('disconnected');
  if (info) {
    if (
      Math.abs(info.latestMilestoneIndex - info.latestSolidSubtangleMilestoneIndex) < data.milestoneLag &&
      info.neighbors >= data.minNeighbors
    ) {
      status = chalk.green('✓');
    } else {
      status = chalk.yellow(`${info.latestSolidSubtangleMilestoneIndex}/${info.latestMilestoneIndex}`);
    }
  }

  const balance = data.accountData
    ? ` ${collapsecornodeAmount(data.accountData.balance)}ι `
    : '';

  const newDelimiter = `${chalk.cyan.bold('cornode')} (${cornodejs.host}:${cornodejs.port} ${status})${balance}${chalk.italic(':')} `;

  if (newDelimiter !== vorpal.ui.delimiter()) {
    vorpal.delimiter(newDelimiter);
    vorpal.ui.delimiter(newDelimiter);
  }
};

module.exports = {
  pauseDelimiter,
  setupPrompt,
  setDelimiter,
  unpauseDelimiter
};
