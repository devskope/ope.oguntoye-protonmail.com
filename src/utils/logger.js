const debug = require('debug');

module.exports = {
  dev: debug('devLog:: '),
  prod: debug('prodLod:: ')
};