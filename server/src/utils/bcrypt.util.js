const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    // const salt = bcrypt.genSalt(5)
    return bcrypt.hash(password, 10)
}

const verifyPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    verifyPassword
}