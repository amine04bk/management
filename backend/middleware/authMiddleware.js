const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Token invalid' });
      const user = await User.findById(decoded.id);
      if (!roles.includes(user.role)) return res.status(403).json({ message: 'Forbidden' });
      req.user = user;
      next();
    });
  };
};

module.exports = authMiddleware;
