'use strict';
const express = require('express');
const app = express();
const cmd = require('node-cmd');
let verifySignature;
const keepalive = require('express-glitch-keepalive');
var assets = require('../assets');
let verifiedSignature;
module.exports = () => {
  app.listen(process.env.PORT);
  app.use('/assets', assets);
  app.get('/', (req, res) => {
    res.json('This bot should be online! Uptimerobot will keep it alive');
  });
  app.post('/git', verifySignature, (req, res) => {
  if (req.headers['x-github-event'] === 'push') {
    cmd.get('bash git.sh', (err, data) => {
      if (err) return console.log(err);
      console.log(data);
      cmd.run('refresh');
      return res.status(200).send(data);
    });
  } else if (req.headers['x-github-event'] === 'ping') {
    return res.status(200).send('PONG');
  } else {
    return res.status(200).send('Unsuported Github event. Nothing done.');
  }
});
};
