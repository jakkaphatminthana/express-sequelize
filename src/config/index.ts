import dotenv from 'dotenv';

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  WHITELIST_ORIGINS: process.env.WHITELIST_ORIGINS?.split(',') ?? [],
};

export default config;
