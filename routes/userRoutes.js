import express from "express";
import {userRegisterController, userLoginController} from "../controller/usercontroller.js"

const userRoute = express.Router();

//Register User
userRoute.post("/register", userRegisterController)

//Login User
userRoute.post("/login", userLoginController)

export default userRoute;



