import { todoTaskController } from "../controller/todocontroller.js";
// import express from "express";
import express from "express";

const todoRoute = express.Router();

//Register User
todoRoute.post("/todo", todoTaskController)

export default todoRoute;