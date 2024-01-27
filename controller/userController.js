const fs = require('fs')
const userModel = require("../models/userModel.js")
const bcrypt = require('bcrypt');

const signUpUser = async (req, res) => {
    try {      
        const userData = req.body;
        const user = await userModel.create(userData);
        res.status(200).send({ id: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Error");
    }
}

module.exports = { signUpUser };