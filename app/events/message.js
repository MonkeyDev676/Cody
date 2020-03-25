'use strict';
const emoji = require('../resources/emojis.json');
const cleverbot = require('cleverbot-free');

module.exports = async (client, message) => {
  const premiumReply = require(`../replies/premium`);
  premiumReply(client, message);
  if (message.channel.id === '674186120304656394') return;
  if (
    message.content.toLowerCase() === 'alexa' ||
    client.mentionOnlyRegex.test(message.content) ||
    message.content.toLowerCase() === 'hey alexa'
  ) {
    message.channel.send(
      `${emoji.alexaloading} I am listening ${emoji.alexaloading}`,
      { tts: true },
    );
    let collected = await message.channel
      .awaitMessages(m => m.author.id === message.author.id, {
        max: 1,
        time: 30000,
      });
    var msg = collected.first();
    const content = msg ? msg.content.toLowerCase() : null;
    if (!msg) {
      message.channel.send(
        `${message.author.tag}, You forgot something?`,
        { tts: true },
      );
    } else if (content === 'cancel') {
      msg.channel.send(
        `${emoji.alexacancel} Alexa canceled ${emoji.alexacancel}`,
        { tts: true },
      );
    } else {
      const customReply = require(`../replies/customReplies`);
      const queryReply = require(`../replies/queryReplies`);
      const multipleReply = require(`../replies/mutipleReplies`);

      let reply =
        customReply[content] ||
        queryReply[/(?:tell|what is|say)? ?([\w ]*)\??/.exec(content)[1]] ||
        multipleReply(content);
      let userInfo = {
        xp: 0,
        level: 0,
        badges: {
          star1: false,
          star2: false,
          star3: false,
          crown1: false,
          crown2: false,
          crown3: false,
          allachievements: false,
        },
      };
      // For now I have put userInfo as this
      if (Array.isArray(reply)) reply = reply[Math.floor(Math.random() * reply.length)];
      else if (typeof reply === 'function') reply = reply({ message: msg, client, userInfo });
      if (reply) return await msg.channel.send(reply, { tts: true });
      let command = client.commands.get(content) || client.command.get(client.aliases.get(content));
      if (command) return await command.dispatch({ message: msg, client });
      cleverbot(msg.content).then(response => {
        var rep = response;
        msg.channel.send(rep, { tts: true });
      });
    }
  }
};
