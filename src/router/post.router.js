const postRouter = require('express').Router();
const { authToken } = require('../middlewares/authToken');
const postController = require('../controller/post.controller');

postRouter.get('/', authToken, postController.getAll);

module.exports = postRouter;
