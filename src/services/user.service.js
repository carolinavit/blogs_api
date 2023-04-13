const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const httpErrGenerator = (status, message) => ({ status, message });

const authenticate = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });
  if (!user) {
    throw httpErrGenerator(400, 'Invalid fields');
  }
  const token = generateToken(user.dataValues);
  return token;
};

module.exports = {
  authenticate,
};
