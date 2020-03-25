'use strict';
const Discord = require('discord.js');
const { readdirSync } = require('fs');

module.exports = client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();

  const commandFiles = readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    var command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
    for (let alias in command.aliases || []) {
      client.aliases.set(alias, command.name);
    }
  }
};
