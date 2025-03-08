const config = {
  name: 'Events Management Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8082, // Dùng port 8082 để tránh trùng với các service khác
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {
    uri: process.env.DB_URI || 'mongodb+srv://redteam:redteam@cluster0.8n4a2.mongodb.net/events_db?retryWrites=true&w=majority',
  },
  services: {},
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;