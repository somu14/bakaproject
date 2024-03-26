const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const user = require("../model/user");

router.use(express.static("public"));

router.get("/", auth, async (req, res) => {
  const userdet = await user.findOne({ email:req.user.email});
  res.render("home",{userdet});
});
router.get("/user", auth, async (req, res) => {
  try {
    const usercred = await user.findOne({ email: req.user.email});
    console.log(usercred);
    res.render("user",{usercred});
  } catch (error) 
  {
    console.log("db err" ,error);
  }
});
router.get("/fav",auth,async(req,res)=>
{
  const userdet = await user.findOne({ email:req.user.email});
  res.render("fav",{userdet});
});
router.post("/update",auth, async (req,res)=>
{
    console.log(req.body.firstname);
    const result1=await user.updateOne({email:req.user.email},{firstname:req.body.firstname});
    const result2=await user.updateOne({email:req.user.email},{lastname:req.body.lastname});
    //console.log(result);
    res.redirect("/home");
});
router.post("/fav",auth, async(req, res) => {
  console.log(req.body.name);
   res.status(200).json({ message: "Chapter received successfully" });
   const favorite = await user.favorites.find({fav:"ch16"});
   console.log(favorite);
   await user.updateOne({email:req.user.email},{$push:{favourites:{fav:req.body.name}}});
});
module.exports = router;
//add
