'use strict';

const setupAddressCommand = require('./address');
const setupApiCommand = require('./api');
const setupBalanceCommand = require('./balance');
const setupClaimCommand = require('./claim');
const setupDepthCommand =require('./depth');
const setupHealthCommand = require('./health');
const setupHistoryCommand = require('./history');
const setupMWMCommand = require('./mwm');
const setupNeighborsCommand = require('./neighbors');
const setupNodeCommand = require('./node');
const setupNodeInfoCommand = require('./nodeinfo');
const setupReplayCommand = require('./replay');
const setupSeedCommand = require('./seed');
const setupTransferCommand = require('./transfer');
const setupValidators = require('./validations').setupValidators;

module.exports = (data, cornodejs, refreshAccountData, refreshServerInfo, vorpal) => {
  setupValidators(data, vorpal);

  setupAddressCommand(data, cornodejs, vorpal);
  setupApiCommand(data, cornodejs, vorpal);
  setupBalanceCommand(data, cornodejs, vorpal);
  setupClaimCommand(data, cornodejs, vorpal);
  setupDepthCommand(data, vorpal);
  setupHealthCommand(data, cornodejs, vorpal);
  setupHistoryCommand(data, cornodejs, vorpal);
  setupMWMCommand(data, vorpal);
  setupNeighborsCommand(data, cornodejs, vorpal);
  setupNodeCommand(data, cornodejs, refreshAccountData, refreshServerInfo, vorpal);
  setupNodeInfoCommand(data, cornodejs, vorpal);
  setupReplayCommand(data, cornodejs, refreshAccountData, vorpal);
  setupSeedCommand(data, refreshAccountData, vorpal);
  setupTransferCommand(data, cornodejs, vorpal);
};
