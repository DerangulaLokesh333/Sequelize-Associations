const { User, Post } = require("../models/associations");

// Create a post for a user
const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const post = await Post.create({
            title,
            content,
            userId
        });

        res.status(201).json(post);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create post",
            error: error.message
        });
    }
};


// Get all posts with their user
const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User
            }
        });

        res.json(posts);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch posts",
            error: error.message
        });
    }
};

module.exports = {
    createPost,
    getPosts
};