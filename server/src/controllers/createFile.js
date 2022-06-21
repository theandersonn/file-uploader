const cloudnary = require('cloudinary').v2;

const File = require('../models/file');

const createFile = async (req, res) => {
  try {
    if (req.fileValidationError) {
      return res.status(400).json({ message: req.fileValidationError });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Insert a file.' });
    }

    const uploadFile = await cloudnary.uploader.upload(req.file.path, {
      folder: 'uploader',
      resource_type: 'auto',
    });

    const { originalname } = req.file;
    const { secure_url, bytes, format } = uploadFile;

    const newFile = await File.create({
      filename: originalname,
      sizeInBytes: bytes,
      secure_url,
      format,
    });

    return res
      .status(201)
      .json({ message: 'File created successfully', data: newFile });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { createFile };
