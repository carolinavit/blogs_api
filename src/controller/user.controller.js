const userService = require('../services/user.service');

const signin = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const login = await userService.authenticate(email, password);
    return res.status(200).json({ token: login });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signin,
};
