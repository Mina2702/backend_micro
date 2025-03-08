const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true }, // Thêm unique cho email
  description: { type: String, required: true },
  meta: {
    likes: { type: Number, default: 0 },
  },
  role: { type: String, required: true, default: 'regular' },
  imagesUID: [String],
  tags: [String],
}, {
  timestamps: true, // Tự động quản lý createdAt/updatedAt
});

module.exports = mongoose.model('User', UserSchema);