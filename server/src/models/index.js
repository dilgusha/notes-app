const Notes = require("./Notes")
const User = require("./User")


module.exports = () => {
    Notes.belongsTo(User, {
        foreignKey: "userId",
        as: "user"
    })
    User.hasMany(Notes, {
        foreignKey: "userId",
        as: "notes",
    })
}