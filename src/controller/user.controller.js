const userService = require('../services/user.service');
const { generateToken } = require('../utils/auth');

const signin = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const login = await userService.authenticate(email, password);
    return res.status(200).json({ token: login });
  } catch (error) {
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
      console.log(newUser);
    const token = generateToken(newUser);
    
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    // isso aqui nao ta certo pelo que eu entendi
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signin,
  createUser,
};
