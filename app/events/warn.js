'use strict';
module.exports = (err, client) => {
  client.channels.get('675923391794118667').send(`Warn:\n${err}`);
};
