import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const envConfig = {
  // env
  env: process.env.ENV,
  
  // port
  port: process.env.USER_PORT || 3001,

  // db
  database: process.env.USER_MYSQL_DB,
  username: process.env.USER_MYSQL_DB_USER,
  password: process.env.USER_MYSQL_DB_PASSWORD,
  host: process.env.USER_MYSQL_DB_HOST,
  dbPort: process.env.USER_MYSQL_DB_PORT,
  
  // another server url
  authServer: process.env.AUTH_SERVER_ADDRESS,
  userServer: process.env.USER_SERVER_ADDRESS,
  productServer: process.env.PRODCUT_SERVER_ADDRESS,
  logServer: process.env.LOG_SERVER_ADDRESS,

  passwordSalt: process.env.PASSWORD_SALT,
  
  // mq
  // mqServerAddress: process.env.MQ_SERVER_ADDRESS,
  // mqServerQueueName: process.env.MQ_SERVER_QUEUENAME,
};

export default envConfig;
