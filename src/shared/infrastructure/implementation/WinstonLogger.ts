import winston, { Logger as WinstonLoggerType } from 'winston';
import config from '@app/config';
import Logger from '@shared/domain/interfaces/Logger';

class WinstonLogger implements Logger {
  private logger: WinstonLoggerType;

  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.simple(),
        winston.format.printf((info) => {
          if (typeof info.message === 'object')
            info.message = `${info.level}: ${JSON.stringify(info.message, null, 2)}`;
          else info.message = `${info.level}: ${info.message}`;
          return info.message;
        })
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `logs/${config.LOGGER_LEVELS.DEBUG}.log`,
          level: config.LOGGER_LEVELS.DEBUG,
        }),
        new winston.transports.File({
          filename: `logs/${config.LOGGER_LEVELS.ERROR}.log`,
          level: config.LOGGER_LEVELS.ERROR,
        }),
        new winston.transports.File({
          filename: `logs/${config.LOGGER_LEVELS.INFO}.log`,
          level: config.LOGGER_LEVELS.INFO,
        }),
      ],
    });
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  error(message: string | Error | any) {
    this.logger.error(message);
  }

  info(message: any) {
    this.logger.info(message);
  }
}
export default WinstonLogger;
