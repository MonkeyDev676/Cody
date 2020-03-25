'use strict';
module.exports = {
  name: 'repaet',
  aliases: ['repeat what i say'],
  description: 'Repeats what you say',
  async execute({ message }) {
    message.channel.send('Say...', { tts: true });
    const collected = await message.channel
      .awaitmessages(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000,
      });
    var msg = collected.first();
    if (!msg) return message.channel.send('You didn\'t send anything!');
    message.channel.send(
      `> ${msg.content}\n\n Said by **${message.author.username}**`,
      { tts: true },
    );
  },
};
