const jwt=require("jsonwebtoken");

function auth(req,res,next)
{
    const token=req.cookies.token;
    if (!token) {
        res.redirect("/login");
      } 
      else
      {
        jwt.verify(token, "heysubhanjanacomeonyaarrrrr", (err, user) => {
          if (err) {
             res.redirect("/login");
          } 
          req.user = user;
          //console.log(user);
          next();
        });
}
}

module.exports=auth;