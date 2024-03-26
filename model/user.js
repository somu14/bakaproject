const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/8thsem")
.then((res)=>{console.log("db connection success");})
.catch((err)=>{console.log("db connection failed");})

const favSchema=new mongoose.Schema({fav:String});

const userschema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phoneno:String,
    password:String,
    favourites:[favSchema],
});

const usermodel=mongoose.model('users',userschema);

module.exports=usermodel;