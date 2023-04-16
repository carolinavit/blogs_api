const { userSchema } = require('../services/validations/schemas');

const validateUser = (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

module.exports = {
  validateUser,
};
