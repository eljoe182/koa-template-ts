import 'dotenv/config'

const env = (key: string, defaultValue: string) => {
  return process.env[key] || defaultValue
}

export default {
  PORT: env('PORT', '3000'),
  DATABASES: {
    MONGODB_URI: env('MONGODB_URI', 'mongodb://localhost:27017/'),
  }
}
