const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  authorUID: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  meta: {
    likes: { type: Number, default: 0 },
  },
  status: { type: Number },
  imagesUID: [String],
  tags: [String],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Article', ArticleSchema);