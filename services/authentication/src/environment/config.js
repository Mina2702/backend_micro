const config = {
  name: 'Authentication Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8081, // Thay 8080 thành 8081 để đồng bộ với .env
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {
    uri: process.env.DB_URI || 'mongodb+srv://redteam:redteam@cluster0.8n4a2.mongodb.net/auth_db?retryWrites=true&w=majority',
  },
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;