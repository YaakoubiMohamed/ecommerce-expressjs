const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// get all users
router.get('/users', userController.getAllUsers);

// get user by id
router.get('/users/:id', userController.getUserById);

//create user
router.post('/users', userController.createUser)

//upadte user
router.put('/users/:id', userController.updateUserById)

//delete user by id
router.delete('/users/:id', userController.deleteUserById)

module.exports = router;