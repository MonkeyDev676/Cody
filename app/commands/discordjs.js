'use strict';
const Discord = require('discord.js');

const fetch = require('node-fetch');
const qs = require('querystring');

module.exports = {
  name: 'djs',
  aliases: ['search djs docs', 'search discordjs docs', 'discordjs docs'],
  description: 'Discord.js Docs',
  async execute({ message }) {
    message.channel.send('What do you want to search?', { tts: true });

    const collected = await message.channel
      .awaitmessages(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000,
      });
    var msg = collected.first();
    if (!msg) return message.channel.send('You didn\'t send anything to search!');

    async function getdjs() {
      let source = 'stable';
      const queryString = qs.stringify({ src: source, q: msg.content });
      var embed = await (await fetch(
        `https://djsdocs.sorta.moe/v2/embed?${queryString}`,
      )).json();
      return embed;
    }

    const result = await getdjs().catch(() => null);
    if (!result) {
      return message.channel.send(
        'Failed to locate that information in the documentation.',
        { tts: true },
      );
    }
    const anEmbed = new Discord.RichEmbed()
      .setTitle(result.title)
      .setDescription(result.description);
    message.channel.send(anEmbed);
  },
};
