const config = {
  name: 'Notification Service',
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq', // Đồng bộ với các service khác
  environment: process.env.ENVIRONMENT || 'dev',
  email: {
    service: process.env.EMAIL_SERVICE || 'gmail', // Mặc định là Gmail nếu không config
    username: process.env.EMAIL_ID || '', // Email gửi
    password: process.env.EMAIL_PASSWORD || '', // App password nếu dùng Gmail
    adminEmailID: process.env.ADMIN_EMAIL || '', // Email nhận thông báo
  },
};

config.startedMessage = `${config.name} is running`;

module.exports = config;