const loginRouter = require('express').Router();
const userController = require('../controller/user.controller');

loginRouter.post('/', userController.signin);

module.exports = loginRouter;
