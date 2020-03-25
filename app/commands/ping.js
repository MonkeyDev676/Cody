'use strict';
module.exports = {
  name: 'ping',
  description: 'Pong!',
  async execute({ message, client }) {
    const m = await message.channel.send('Ping?');
    m.edit(
      `Pong!\nLatency- ${m.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency- ${Math.round(client.ping)}ms`,
    );
  },
};
