import 'dotenv/config'

const env = (key: string, defaultValue: string) => {
  return process.env[key] || defaultValue
}

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
};
