const multer = require('multer');

const storage = multer.diskStorage({});
const uploadFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
    req.fileValidationError = 'Only png, jpg, jpeg, pdf formats are supported.';
    return cb(null, false, req.fileValidationError);
  }
  return cb(undefined, true);
};

const fileUpload = multer({
  storage,
  fileFilter: uploadFilter,
});

module.exports = fileUpload;
