'use strict';
module.exports = content => {
  if (['who made you', 'who is your developer'].includes(content)) return 'Monkey';
  return null;
};
