const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    sizeInBytes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('File', FileSchema);
