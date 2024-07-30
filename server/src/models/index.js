require('../database');
const Notes = require("./Notes");
const User = require("./User");

User.hasMany(Notes, {
    foreignKey: "userId",
    onDelete: "Cascade",
})
Notes.belongsTo(User, {
    foreignKey: "userId"
})

module.exports = {
    Notes,
    User,
}