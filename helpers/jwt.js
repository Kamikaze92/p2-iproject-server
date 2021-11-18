const jwt = require ('jsonwebtoken');

function signToken(access_token){
    return jwt.sign(access_token, process.env.JWT_CODE);
}

function verifyToken(access_token){
    return jwt.verify(access_token, process.env.JWT_CODE);
}

module.exports = {signToken, verifyToken}