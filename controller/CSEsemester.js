exports.getSem1 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem1", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}