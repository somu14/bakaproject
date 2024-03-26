const user =require("../model/user");

async function isuser(req,res,next)
{
    const userid= await user.findOne({email:req.body.email});
    if(userid!=null)
    {
        res.redirect("/login");
    }
    else
    {
        next();
    }
}

module.exports=isuser;