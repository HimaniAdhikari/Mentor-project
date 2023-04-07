const alert = require("alert");
module.exports = (req,res,next)=>{
    if(req.session.loggedIn){
        if(req.session.user.email == "ayushrawat324@gmail.com")
            return next();
    }
    else{
        alert("You are not an admin");
        res.redirect("/");
    }
}