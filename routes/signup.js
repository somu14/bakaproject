const express=require("express");
const bcrypt=require("bcrypt");

const user = require("../model/user");
const router= express.Router();

const usercheck=require("../middleware/userchecker");


router.get("/",(req,res)=>
{
    res.render('signup');
});
router.post("/", usercheck, async(req,res)=>
{
    const usermodel=new user();
    usermodel.firstname=req.body.firstname;
    usermodel.lastname=req.body.lastname;
    usermodel.email=req.body.email;
    usermodel.phoneno=req.body.phoneno;
    await usermodel.save();
    bcrypt.hash(req.body.password,10, async (err,hash)=>
    {
        if(err){console.log("hash not working");}//take user to something went wrong
        else{
            usermodel.password=hash;
            try{
            await usermodel.save();
            }
            catch(error)
            {
                console.log("error is", error)//take user to something went wrong
            }
        }
    });
    res.redirect("/login");
});
module.exports=router;