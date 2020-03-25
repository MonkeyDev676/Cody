'use strict';
const discord = require('discord.js');
const client = new discord.Client();

console.log([process.env.GITHUB_SECRET]);

require('./handlers/event')(client);
require('./handlers/express')();
console.log('Loaded Handlers.');

require('./messageReply')(client);
console.log('Loaded Replys.');

/*
require("./sharding.js")(client);
console.log("Loaded Shards.");
*/
require('./handlers/command')(client);
console.log('Loaded Commands.');
// client.login(process.env.TOKEN);
