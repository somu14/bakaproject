const express=require("express");
const router= express.Router();
const jwt=require("jsonwebtoken");

const  bcrypt= require("bcrypt");
const user=require("../model/user");

router.get("/",(req,res)=>
{
    res.render('login');
});

router.post("/", async (req,res)=>
{
    const userid =await user.findOne({email:req.body.email});
    bcrypt.compare(req.body.password,userid.password,(err,result)=>{
        if(err)
        {
            console.log(err);//something went wrong
        }
        if(result)
        {
            console.log("hey you came heree");
            const token=jwt.sign({email:req.body.email},"heysubhanjanacomeonyaarrrrr",{expiresIn:"1d"});
            res.cookie("token",token);
            res.redirect("/home");
        }
        else{console.log("hey wrong password");}
    });
});
module.exports=router;