const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const { authToken } = require('../middlewares/authToken');
const { validateUser } = require('../middlewares/validateUser');

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', authToken, userController.getAll);

module.exports = userRouter;
