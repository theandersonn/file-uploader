// const File = require('../models/file');

// eslint-disable-next-line consistent-return
const createFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Insert a file.' });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { createFile };
