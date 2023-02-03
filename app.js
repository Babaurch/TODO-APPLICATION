import express from "express"
import config from "./config/config.js";
import { start } from "./config/db.js";
import bodyParser   from "body-parser";
import userRoute from "./routes/userRoutes.js";
import todoRoute from "./routes/todoRoute.js";
import cors from "cors";



const PORT = config.PORT
start()

const app = express()


//Middleware
app.use(cors())
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", userRoute)
app.use("/", todoRoute)



//API Call
app.get("/", (req, res) => {
    res.render("index")
});

app.get("/task", (req, res) => {
    res.render("task")
})



//Listening to Server
app.listen(PORT, () => {
    console.log(`🛩️  Server Started @http://localhost:${PORT}`);
})