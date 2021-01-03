const jwt = require('jsonwebtoken')

const createToken = (id, maxAge) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: maxAge
    });
};

module.exports = { 
    createToken
}