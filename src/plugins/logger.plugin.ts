import winston, {format} from 'winston'
const {combine, timestamp, json} = format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
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

export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log('info', {message, service});
    },
    error: (message: string) => {
      logger.error('error',{
        message,
        service,
      });
    }
  }
}