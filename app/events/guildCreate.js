'use strict';
const discord = require('discord.js');

module.exports = (client, guild) => {
  let embed = new discord.RichEmbed()
    .setTitle('Thanks for inviting alexa hope you like me')
    .setColour(0xCF40FA)
    // eslint-disable-next-line max-len
    .setDescription("Say 'Alexa' in your server to get started! Before saying that do this below in your discord settings to make alexa to Speak")
    .setImage('https://cdn.discordapp.com/attachments/675614433778597898/689450031400353802/Alexa_Usage.PNG');
  guild.owner.send(embed);
};
