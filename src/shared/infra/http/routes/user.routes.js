const { Router } = require('express');

const UsersController = require('./../../../../domain/user/infra/http/controllers/UsersController');

const usersController = new UsersController();

const userRoutes = Router();

userRoutes.post('/', usersController.create);
userRoutes.get('/', usersController.index);

module.exports = userRoutes;