const jwt = require('jsonwebtoken');

const SECRET_KEY = 'nghiemdeptraipro98';

function sign(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, SECRET_KEY, { expiresIn: '2 days' }, (error, token) => {
            if (error) return reject(error);
            resolve(token);
        });
    });
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (error, obj) => {
            if (error) return reject(error);
            delete obj.exp;
            delete obj.iat;
            resolve(obj);
        });
    });
}

module.exports = { verify, sign };