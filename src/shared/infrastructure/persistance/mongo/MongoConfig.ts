import config from '../../../../app/config';

type MongoConfig = { url: string };

export default MongoConfig;

export class MongoConfigFactory {
  static create(): MongoConfig {
    return {
      url: config.DATABASES.MONGODB_URI,
    };
  }
}
