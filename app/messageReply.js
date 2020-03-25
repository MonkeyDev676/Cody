'use strict';
const emoji = require('./resources/emojis.json');

const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./database.json', 'utf8'));

const Discord = require('discord.js');
const Client = new Discord.Client();

Client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  var command = require(`./commands/${file}`);
  Client.commands.set(command.name, command);
}

module.exports = client => {
  client.on('message', message => {
    if (!db[message.author.id]) {
      db[message.author.id] = {
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
    }
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if (userInfo.xp > 100) {
      userInfo.level++;
      userInfo.xp = 0;
      message.reply('Congratulations, you level up');
    }

    if (userInfo.level === 5) {
      userInfo.badges.star3 = true;
      message.channel.send(
        `You have completed a Achievement ${
          emoji.achievement2
        } \nYou have earned ${
          emoji.star3}`,
      );
    }

    if (userInfo.level === 10) {
      userInfo.badges.star2 = true;
      message.channel.send(
        `You have completed a Achievement ${
          emoji.achievement2
        } \nYou have earned ${
          emoji.star2}`,
      );
    }

    if (userInfo.level === 20) {
      userInfo.badges.star1 = true;
      message.channel.send(
        `You have completed a Achievement ${
          emoji.achievement2
        } \nYou have earned ${
          emoji.star1}`,
      );
    }
  });
};
