'use strict';
module.exports = async client => {
  client.mentionOnlyRegex = new RegExp(`^<@!?${client.user.id}>$`);
  await client.user.setActivity('the badges!', {
    type: 'WATCHING',
  });
  await client.user.setStatus('dnd');
  await console.log(
    `Alexa Ready and Initialized in Port ${process.env.PORT}\nSuccessfully Loggen in!`,
  );
};
