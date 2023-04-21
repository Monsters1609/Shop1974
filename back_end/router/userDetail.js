const express = require('express')
const router = express.Router();
const userDetailController = require('../controller/userDetailController');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getUserDetail', userDetailController.index)
router.post('/postUserDetail', userDetailController.addUser)
// router.put('/putUserDetail', accountController.update)
// router.delete('/deleteUserDetail/:PhoneNumber', accountController.delete)

module.exports = router;