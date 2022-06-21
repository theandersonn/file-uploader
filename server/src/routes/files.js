const router = require('express').Router();

const { createFile } = require('../controllers');

router.post('/create', createFile);

module.exports = router;
