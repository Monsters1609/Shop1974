const express = require('express')
const router = express.Router();
const roleController = require('../controller/roleController')
// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getRole', roleController.index)

module.exports = router;
