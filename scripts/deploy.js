'use strict';

const Rsync = require('rsync');
const log4js = require('log4js');
const config = require('../cfg/secrets').deploy;

var rsync = Rsync.build({
  source:      './dist/',
  destination: `${config.username}@${config.hostname}:${config.path}`,
  exclude:     ['README.md'],
  flags:       'avz',
  shell:       'ssh'
});

rsync.set('progress');

rsync.output(
  function (data) {
    console.log('sync: ' + data);
  }, function (data) {
    console.log('sync: ' + data);
  }
);

rsync.execute(function (err, stdout, stderr) {
  console.log('completed ' + err + ' ' + stdout);
});

console.log('running the command ' + rsync.command());
