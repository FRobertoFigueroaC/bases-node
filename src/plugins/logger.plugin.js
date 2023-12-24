const winston = require ('winston');
const {combine, timestamp, json} = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = function buildLogger(service){
  return {
    log: (message) => {
      logger.log('info', {message, service});
    },
    error: (message) => {
      logger.error('error',{
        message,
        service,
      });
    }
  }
}