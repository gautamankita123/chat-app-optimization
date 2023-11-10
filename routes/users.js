const express = require('express')
const userController = require('../controllers/users')
const userauthonticate = require('../middleware/auth')
const router = express.Router()

router.post('/signup', userController.createUser);

router.post('/login', userController.loginUser)

module.exports = router;
