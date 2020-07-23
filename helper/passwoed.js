const bkfd2Password = require('pbkdf2-password');
const hasher = bkfd2Password();

module.exports = async (password) => {
    return new Promise((resolve, reject) => {
        return hasher({ password: password, salt: 'mabaApi' }, (err, pass, salt, hash) => {
            resolve(hash)
        })
    })
}