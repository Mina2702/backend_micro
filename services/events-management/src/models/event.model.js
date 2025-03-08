const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  authorUID: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  eventDate: { type: Date, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  meta: {
    attending: { type: Number, default: 0 },
  },
  status: { type: Number },
  imagesUID: [String],
  tags: [String],
}, {
  timestamps: true, // Tự động quản lý createdAt/updatedAt
});

module.exports = mongoose.model('Event', EventSchema);