import 'dotenv/config';

const env = (key: string, defaultValue: string) => {
  return process.env[key] || defaultValue;
};

export default {
  LOGGER_LEVELS: {
    DEBUG: 'debug',
    ERROR: 'error',
    INFO: 'info',
  },
  PORT: env('PORT', '3000'),
  DATABASES: {
    MONGODB_URI: env('MONGODB_URI', 'mongodb://localhost:27017/'),
  },
  EXTERNAL_API_URL: env('EXTERNAL_API_URL', 'http://localhost:3001'),
  STREAM: {
    KAFKA: {
      CLIENT_ID: env('KAFKA_CLIENT_ID', 'my-app'),
      GROUP_ID: env('KAFKA_GROUP_ID', 'my-group'),
      BROKERS: env('KAFKA_BROKERS', 'localhost:9092'),
      TOPICS: {
        TEST: env('KAFKA_TOPIC_TEST', 'test'),
      },
    },
  },
};
