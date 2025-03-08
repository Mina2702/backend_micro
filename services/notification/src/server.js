/* eslint-disable no-console */
require('dotenv').config();
const logger = require('winston');
const Koa = require('koa');
const config = require('./environment/config');

// Khởi động subscription
require('./subscriptions/article.added').start();

// Khởi động server (không cần port vì đây chỉ là message consumer)
const app = new Koa();
app.listen(); // Không cần port vì service này không phục vụ API
logger.info(config.startedMessage);