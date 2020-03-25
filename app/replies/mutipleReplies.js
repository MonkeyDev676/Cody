'use strict';
module.exports = content => {
  if (['who made you', 'who is your developer'].includes(content)) return 'an0Kx42, Itz Sudhan and Unique';
  return null;
};
