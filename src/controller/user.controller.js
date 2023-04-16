const userService = require('../services/user.service');
const { generateToken } = require('../utils/auth');

const signin = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const login = await userService.authenticate(email, password);
    return res.status(200).json({ token: login });
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.createUser(
      displayName,
      email,
      password,
      image,
    );
    const token = generateToken(newUser.dataValues);
    
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
};

module.exports = {
  signin,
  createUser,
  getAll,
  getById,
};
