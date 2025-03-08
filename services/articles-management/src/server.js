/* eslint-disable no-console */
require('dotenv').config();

const mongoose = require('mongoose');
const config = require('./environment/config');
const app = require('./app');

// Kết nối MongoDB Atlas
async function startServer() {
  try {
    await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    app.listen(config.port, () => {
      console.log(config.startedMessage);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

startServer();