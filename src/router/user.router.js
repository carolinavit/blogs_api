const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const { validateUser } = require('../middlewares/validateUser');

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;
