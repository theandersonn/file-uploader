const router = require('express').Router();

const { createFile } = require('../controllers');
const fileUpload = require('../helpers/file-upload');

router.post('/create', fileUpload.single('myFile'), createFile);

module.exports = router;
