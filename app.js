const express = require("express");
const sequelize = require("./db");

const {
    createPost,
    getPosts
} = require("./controllers/postController");

const {
    createUser
} = require("./controllers/userController");

const app = express();

app.use(express.json());


// Create a user
app.post("/users", createUser);


// Create a post
app.post("/posts", createPost);


// Get all posts with user information
app.get("/posts", getPosts);


// Start server
async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully");

        await sequelize.sync();

        console.log("Tables created successfully");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.log("Failed to start server:", error.message);
    }
}

startServer();