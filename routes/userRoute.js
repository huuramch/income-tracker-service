const { Router } = require('express');
const userRouter = Router();
const userModel = require('../models/userModel.js');
const { signUpUser, loginUser } = require('../controller/userController.js');
const bcrypt = require("bcrypt");

const validateEmailAddress = async (req, res, next) =>{ 
    const body = req.body;
    const user = await userModel.findOne({email: body.email});
    if(!user) {
        next();
    } else {
        res.status(403).send("Email Address is already used")
    }
} 

const validatePasswordAndEmailAddress = async (req, res, next) => {
    const body = req.body;
    try {
        const user = await  userModel.findOne({ email: body.email });
        console.log(user)
        if (user) {
            const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);
            if (isPasswordCorrect) {
                next();
            } else {
                res.status(401).send("Invalid password");
            }
        } else {
            res.status(401).send("Invalid password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

userRouter.post('/login', validatePasswordAndEmailAddress, loginUser )
userRouter.post('/signUp', validateEmailAddress, signUpUser);

module.exports = userRouter;