/* const { httpErrGenerator } = require('../services/user.service'); */
const { userSchema } = require('../services/validations/schemas');

const validateUser = (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    // eu nao sei como que retorna o status 400 e a mensagem vinda do Joi????????????????????
    return res.status(400).json({ message: error.message });
  }
  return next();
};

module.exports = {
  validateUser,
};
