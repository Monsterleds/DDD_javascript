const server = require('./../app');

server.listen(3333, () => {
  console.log('Server listening on port 3333');
});

module.exports = server;