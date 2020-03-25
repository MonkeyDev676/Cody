'use strict';
module.exports = () => {
  const { ShardingManager } = require('discord.js');
  const manager = new ShardingManager('./alexa.js', {
    token: process.env.TOKEN,
  });

  manager.spawn();
  manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
  // manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
};
