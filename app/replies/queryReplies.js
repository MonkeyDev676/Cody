'use strict';
const Discord = require('discord.js');
const color = require('../resources/colours.json');

module.exports = {
  'my name': ({ message }) => `Your name is **${message.author.username}**`,
  'your version': `My version is ${process.env.version}`,
  'my level': ({ userInfo }) => `You Current Level is **${userInfo.level}**`,
  'my profile': ({ message, userInfo }) => new Discord.MessageEmbed()
    .setTitle(`${message.author.username} 's Profile `)
    .setColor(color.main)
    .setDescription([`Level: ${userInfo.level}`, `Exp: ${userInfo.xp}/100`].join('\n')),
};
