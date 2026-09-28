const { User } = require("../models/associations");

// Create a user
const createUser = async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        const user = await User.create({
            name,
            phone,
            email
        });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create user",
            error: error.message
        });
    }
};

module.exports = {
    createUser
};