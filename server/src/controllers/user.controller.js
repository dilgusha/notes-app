const { userService } = require("../services/index")

const createUser = async (req, res) => {
    // const { username, password } = req.body;
    try {
        let user = await userService.createUser(req.body)
        res.json({
            status: true,
            message: 'User created',
            user
        })
    } catch (err) {
        res.status(409).json(
            {
                message: err?.message,
            }
        )
    }
}
const findAll = async (req, res) => {
    try {
        let users = await userService.findAll();
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err?.message,
        })
    }
}


module.exports = {
    createUser,
    findAll
}

