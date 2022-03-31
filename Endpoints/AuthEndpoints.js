/**
 * File to bind routes with their handler functions for the Authentication module.
 */

const express = require('express');
const authRouter = express.Router();
const authHandler = require('../Handlers/AuthHandlers.js');

//Routes
var register = '/register';
var logIn = '/login';
var logOut = '/logout';
var inPersonTracking = '/in-person';
var verifyUser = '/verify';
var changePassword = '/change-pass';

authRouter.post(register, authHandler.registerUser);
authRouter.post(logIn, authHandler.logIn);
authRouter.post(logOut, authHandler.logOut);
// authRouter.post(inPersonTracking, authHandler.trackInPerson);
// authRouter.post(verifyUser, authHandler.verifyUserFromEmail);

module.exports = authRouter;

/**
 * Developer Notes:
 * 
 * - add an endpoint to change password
 * - add endpoint for isVerified?
 */