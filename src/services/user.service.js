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

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    throw httpErrGenerator(409, 'User already registered');
  }
  const createNewUser = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return createNewUser;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  if (!user) {
    throw httpErrGenerator(404, 'User does not exist');
  }
  return user;
};

module.exports = {
  authenticate,
  createUser,
  httpErrGenerator,
  getAll,
  getById,
};
