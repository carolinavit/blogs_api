const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token) => {
  if (!token) return false;
  try {
    const isValid = jwt.verify(token, secretKey);

    return isValid;
  } catch (error) {
    return {};
  }
};

module.exports = {
  generateToken,
  validateToken,
};
