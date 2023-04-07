const alert = require("alert");
module.exports = (req,res,next)=>{
    if(req.session.loggedIn){
        return next();
    }
    else{
        alert( "Please login/signup to see the notes inside. ");
        return res.redirect("/courses");
    }
}