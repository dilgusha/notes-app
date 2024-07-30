const { NotFoundError, ValidationError } = require("../errors");
const { verifyPassword } = require("../utils/bcrypt.util");
const { encodePayload } = require("../utils/jwt.util");
const { findByUsername } = require("./user.service");

const login = async (params) => {
    const { username, password } = params || {};
    let user = await findByUsername(username);
    if (!user) {
        throw new NotFoundError("User not found");
    }
    user = user.toJSON();
    const chechPassword = verifyPassword(password, user.password)
    if (!chechPassword) {
        throw new ValidationError("Password is wrong");
    }
    const payload = {
        userId: user.id
    };
    const token = encodePayload(payload);
    delete user.password;
    return {
        user,
        token,
    }
}
module.exports = {
    login,
}