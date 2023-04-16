const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = await categoryService.createCategory(name);
    return res.status(201).json({ id, name });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
};
