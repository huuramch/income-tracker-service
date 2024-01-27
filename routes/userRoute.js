const { Router } = require('express');
const userModel = require('../models/userModel.js');
const { signUpUser } = require('../controller/userController.js');

const userRouter = Router();

userRouter.post('/signUp', signUpUser);

module.exports = userRouter;