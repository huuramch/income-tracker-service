const fs = require('fs')
const userModel = require("../models/userModel.js")
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
    try {
        const body = req.body;
        const user = await userModel.findOne({ email: body.email });

        if (user) {
            res.status(200).send(user._id);
        } else {
            res.status(404).send("Not Found");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
};

const signUpUser = async (req, res) => {
    const body = req.body;
    const password = body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = {...body, password: hashedPassword };
    try {      
        const user = await userModel.create(data);
        res.status(200).send({ id: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Error");
    }
}

module.exports = { signUpUser, loginUser };