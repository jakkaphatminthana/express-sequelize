import dotenv from 'dotenv';

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  WHITELIST_ORIGINS: process.env.WHITELIST_ORIGINS?.split(',') ?? [],
  getDatabaseConfig: () => ({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
  }),
};

export default config;
