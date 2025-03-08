# Sử dụng Node.js phiên bản mới nhất
FROM node:20-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY package.json .
RUN npm install

# Sao chép toàn bộ code
COPY . .

# Mở port tương ứng với service
EXPOSE 8080

# Chạy ứng dụng
CMD ["npm", "start"]