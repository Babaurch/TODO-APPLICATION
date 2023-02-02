import express from "express";
import {userRegisterController, userLoginController} from "../controller/userController.js"

const userRoute = express.Router();

//Register User
userRoute.post("/register", userRegisterController)

//Login User
userRoute.post("/login", userLoginController)

export default userRoute;



