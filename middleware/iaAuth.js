const alert = require("alert");
module.exports = (req,res,next)=>{
    if(req.session.loggedIn){
        return next();
    }
    else{
        req.flash("error","Please signup/login to access the notes");
        return res.redirect("/courses");
    }
}