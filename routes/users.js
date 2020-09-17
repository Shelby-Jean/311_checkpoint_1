const express = require('express');
const router = express.Router;
const usersController = require('../controllers/users');


//gets users
router.get('/users', usersController.listUsers);

//gets one user with id
router.get('/users/:id', usersController.showUser);

//create user
router.post('/users', usersController.createUser)

//update user
router.put('/users', usersController.updateUser);

//delete
router.delete('/users/:id', usersController.deleteUser);


module.exports= router;