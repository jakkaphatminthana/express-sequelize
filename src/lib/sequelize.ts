import { Sequelize } from 'sequelize-typescript';
import config from '@/config';

const db = config.getDatabaseConfig();

const sequelize = new Sequelize({
  database: db.database,
  username: db.username,
  password: db.password,
  port: db.port,
  dialect: 'postgres',
  host: 'postgres',
  models: [__dirname + '/src/models'],
});

export default sequelize;
