const { encodePayload } = require("../utils/jwt.util");
const {  findByUsername } = require("./user.service");

const login = async (params) => {
    const { username, password } = params || {};
    let user = await findByUsername(username);
    if (!user) {
        throw new Error('username_not_found');
    }
    user = user.toJSON();
    if (user.password !== password) {
        throw new Error('password_invalid');
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