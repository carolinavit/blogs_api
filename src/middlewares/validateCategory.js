const { categorySchema } = require('../services/validations/schemas');

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  const { error } = categorySchema.validate({ name });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

module.exports = {
  validateCategory,
};
