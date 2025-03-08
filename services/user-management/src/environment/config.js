const config = {
  name: 'User Management Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8083, // Dùng port 8083 để tránh trùng
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {
    uri: process.env.DB_URI || 'mongodb+srv://redteam:redteam@cluster0.8n4a2.mongodb.net/users_db?retryWrites=true&w=majority',
  },
  services: {},
  messageTimeout: 500,
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;