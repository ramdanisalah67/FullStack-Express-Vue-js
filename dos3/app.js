const FilterJWT = require('./Middlewares/checkJWT')
const express = require("express");

require("dotenv").config()
const logger = require("./Middlewares/logger")
const {notFound,customizeException} = require("./Middlewares/errors")

const connectToDb = require("./config/db")
const helmet = require("helmet")
const cors = require("cors")

const {verifyToken} = require("./Middlewares/verifyToken")
const asyncHandler = require("express-async-handler")


    //== Connection To mongoDb Connection
connectToDb()
const app = express();
app.use(express.json());
app.use(cors({origin:"http://localhost:8081"}));

app.use("/api/product",require("./routes/products"))

app.get('/',verifyToken, asyncHandler(async(req, res) => {
    res.send('Hello World');
}));

app.use("/api/auth",require("./routes/auth"))
app.use("/api/users",require("./routes/users"))

//Running The Server 
const PORT = 5000; ;
app.listen(PORT,()=>{console.log("Server Running on port " +PORT)})