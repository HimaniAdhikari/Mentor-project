exports.getSem1 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem1", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem2 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem2", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem3 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem3", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}

exports.getSem4 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem4", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem5 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem5", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem6 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem6", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem7 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem7", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem8 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem8", {path:"/courses", isAuthenticated: req.session.loggedIn, user: req.session.user});
}



