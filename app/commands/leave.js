'use strict';
const emoji = require('../resources/emojis.json');

module.exports = {
  name: 'leave',
  aliases: ['leave this server'],
  description: 'Make the bot leave the server!',
  execute({ message }) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.send(
        `${emoji.alexaloading
        }You can't make me leave${
          emoji.alexaloading}`,
        { tts: true },
      );
    }
  },
};
