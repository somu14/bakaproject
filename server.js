const bodyParser = require("body-parser");
const express=require("express");
const cookie=require("cookie-parser");

const app=express();
app.use(cookie());

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/signup",require("./routes/signup.js"));
app.use("/login",require("./routes/login.js"));
app.use("/home",require("./routes/home.js"));

app.listen(5000,()=>
{
    console.log("server started at port 5000");
});