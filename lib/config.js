'use strict';

const fs = require('fs');
const getAt = require('lodash/get');
const os = require('os');
const path = require('path');
const Promise = require('bluebird');
const setAt = require('lodash/set');

const homedir = os.homedir();
const cornodeDir = path.join(homedir, '.cornode');
const cornodeConfig = path.join(cornodeDir, 'config.json');

const setupConfigFile = new Promise((resolve, reject) => {
  fs.access(cornodeDir, fs.constants.W_OK, err => {
    if (err) {
      return fs.mkdir(cornodeDir, err2 => {
        if (err2) {
          return reject(err2);
        }
        resolve();
      });
    }

    resolve();
  });
})
.then(() => new Promise((resolve, reject) => {
  fs.access(cornodeConfig, fs.constants.W_OK, err => {
    if (err) {
      return fs.writeFile(cornodeConfig, '{}', err2 => {
        if (err2) {
          return reject(err2);
        }
        resolve();
      });
    }

    resolve();
  });
}));

const get = (path, defaultValue) => load()
  .then(configData => getAt(configData, path, defaultValue));

const load = () => setupConfigFile
  .then(() => new Promise((resolve, reject) => {
    fs.readFile(cornodeConfig, (err, contents) => {
      if (err) {
        return reject(err);
      }

      try {
        const configData = JSON.parse(contents);
        resolve(configData);
      } catch (err2) {
        if (err) {
          return reject(err2);
        }
      }
    });
  }));

const set = (path, value) => load()
    .then(configData => {
      if (!path || !value) {
        return configData;
      }

      setAt(configData, path, value);
      return configData;
    })
    .then(configData => new Promise((resolve, reject) => {
      fs.writeFile(cornodeConfig, JSON.stringify(configData), err => {
        if (err) {
          return reject(err);
        }
        resolve(configData);
      });
    }));

module.exports = {
  get,
  set
};
