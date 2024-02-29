const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/8thsem")
.then((res)=>{console.log("db connection success");})
.catch((err)=>{console.log("db connection failed");})



const userschema=new mongoose.Schema({
    Name:String,
    email:String,
    phoneno:String,
    password:String,
    favourites:{id:String}
});

const usermodel=mongoose.model('users',userschema);

module.exports=usermodel;