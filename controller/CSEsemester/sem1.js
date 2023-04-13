exports.getAppliedPhysics = (req,res,next)=>{
    // console.log("abc");
    res.render("semesters/notes", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user})
};