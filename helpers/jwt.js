var jwt = require('jsonwebtoken');

function signToken(access_token){
    return jwt.sign(access_token, process.env.JWT_SIGNATURE);
}

function verifyToken(access_token){
    return jwt.verify(access_token, process.env.JWT_SIGNATURE);
}

module.exports = {signToken, verifyToken}