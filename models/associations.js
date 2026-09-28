const User = require("./user");
const Post = require("./Post");

User.hasMany(Post, {
    foreignKey: "userId"
});

Post.belongsTo(User, {
    foreignKey: "userId"
});

module.exports = {
    User,
    Post
};