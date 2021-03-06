const promisify = require('es6-promisify');
const logger = require('winston');
const config = require('./config');
const server = require('./server');

const serverListen = promisify(server.listen, server);

serverListen(config.port)
  .then(() => logger.info(`Server is listening on port ${config.port}`))
  .catch((err) => {
    logger.error('Error happened during server start', err);
    process.exit(1);
  });
