const { validateToken } = require('../utils/auth');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = validateToken(authorization);

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  if (!token.email) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  return next();
};

module.exports = {
  authToken,
};
