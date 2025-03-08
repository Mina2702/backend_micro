const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  emailAddress: { type: String, required: true, unique: true }, // Thêm unique để tránh trùng email
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'regular' },
  status: { type: String, default: 'active' },
}, {
  timestamps: true, // Tự động quản lý createdAt/updatedAt
});

module.exports = mongoose.model('Auth', AuthSchema);