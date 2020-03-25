'use strict';
const Discord = require('discord.js');
const color = require('../resources/colours.json');

module.exports = {
  'my name': ({ message }) => `Your name is **${message.author.username}**`,
  'your version': `My version is ${process.env.version}`,
  'my level': ({ userInfo }) => `You Current Level is **${userInfo.level}**`,
  'my profile': ({ message, userInfo }) => new Discord.MessageEmbed()
    .setTitle(`Profile of ${message.author.username}`)
    .setColor(color.main)
    .setDescription([`Level: ${userInfo.level}`, `XP: ${userInfo.xp}/100`].join('\n')),
};
