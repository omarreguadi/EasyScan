const jwt = require('jsonwebtoken')
const User = require('../models/user.model');

const auth = function async (req, res, next) {
    const token = req.cookies['jwt']
    if (!token) return res.status(401).json({
        success: false,
        error: 'Access denied!'
    })
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        next();
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        })
    }

}
const isAdmin = (req, res, next) => {
    const token = req.cookies['jwt'];

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN , async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }

};

module.exports = {
    auth,
    isAdmin
}