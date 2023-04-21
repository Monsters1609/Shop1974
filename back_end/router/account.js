const express = require('express')
const router = express.Router();
const accountController = require('../controller/accountController');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getAccount', accountController.index)
router.post('/postAccount', accountController.register)
router.put('/putAccount', accountController.update)
router.delete('/deleteAccount/:PhoneNumber', accountController.delete)

module.exports = router;
