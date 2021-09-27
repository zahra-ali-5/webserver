require("./db/connection");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
//const {helloWorld} = require("./controllers")
const helloRouter=require("./routes");
 
app.use(express.json());
app.use(cors());

//app.get("/hello", (req, res)=>{
//    res.send("Hello world!");
//});

//app.get("/hello", helloWorld);
app.use(helloRouter);

app.listen(5000, ()=>{
    console.log("listening port 5000");
});