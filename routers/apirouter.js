const express = require('express');

const route = express.Router();

const authController = require('../controllers/myController');

route.get('/users' , authController.getAllUser);

route.get('/user/:id' , authController.getUser);

route.post('/addUser', authController.addUser);

route.patch('/update/:id' , authController.updateUser);

route.delete('/delete/:id' , authController.deleteUser);

module.exports = route;