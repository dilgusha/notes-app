const { User } = require("../models");
const { hashPassword } = require("../utils/bcrypt.util");

const createUser = async (params) => {
    const { username, password } = params;
    let existsUser = await findByUsername(username);
    if (existsUser) throw new Error('User already exists');
    const hash = await hashPassword(password);
    let user = await User.create({
        username,
        password: hash,
    })
    return user;

}
const findAll = async () => {
    const users = await User.findAll();
    return users;
}
const findById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}
const findByUsername = async (username) => {
    let user = await User.findOne({ where: { username } });
    return user;
}
module.exports = {
    createUser,
    findByUsername,
    findAll,
    findById
}

// const createUsers = async (params) => {
//     const { username, password } = params;
//     if (!username || !password) {
//         throw new Error('Username and password are required');
//     }

//     let existsUser;
//     try {
//         existsUser = await findUserByUsername(username);
//     } catch (error) {
//         console.error('Error finding user by username:', error.message);
//         throw new Error('Error finding user by username');
//     }

//     if (existsUser) throw new Error('User already exists');

//     let user;
//     try {
//         user = await User.create({
//             username,
//             password
//         });
//     } catch (error) {
//         console.error('Error creating user:', error.message);
//         throw new Error('Error creating user');
//     }

//     return user;
// }
// module.exports = createUsers