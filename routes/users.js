const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');


//gets all users
router.get('/users', usersController.listUsers);

//gets one user with id
router.get('/users/:id', usersController.showUser);

//create user
router.post('/users', usersController.createUser)

//update user with id
router.put('/users/:id', usersController.updateUser);

//delete user with id
router.delete('/users/:id', usersController.deleteUser);


module.exports = router;