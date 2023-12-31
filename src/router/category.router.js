const categoryRouter = require('express').Router();
const { authToken } = require('../middlewares/authToken');
const categoryController = require('../controller/category.controller');
const { validateCategory } = require('../middlewares/validateCategory');

categoryRouter.post('/', authToken, validateCategory, categoryController.createCategory);
categoryRouter.get('/', authToken, categoryController.getAll);

module.exports = categoryRouter;
