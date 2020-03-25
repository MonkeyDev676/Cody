'use strict';
const cleverbot = require('cleverbot-free');

module.exports = (client, msg) => {
  if (msg.channel.id !== '689673927080804436') return;
  if (msg.author.bot) return;
  cleverbot(msg.content).then(response => {
    var reply = response;
    msg.channel.send(reply, { tts: true });
  });
};
