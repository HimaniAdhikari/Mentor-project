exports.getBtechCSI = (req,res,next)=>{
    res.render("courses/btech-cse", {path: "/courses",  isAuthenticated: req.session.loggedIn, user:req.session.user});
};

exports.getBtechECE = (req,res,next)=>{
    res.render("courses/btech-ece", {path: "/courses",  isAuthenticated: req.session.loggedIn, user:req.session.user});
};

exports.getBtechAI = (req,res,next)=>{
    res.render("courses/btech-ai", {path: "/courses",  isAuthenticated: req.session.loggedIn,user:req.session.user});
};

exports.getBCA = (req,res,next)=>{
    res.render("courses/bca", {path: "/courses",  isAuthenticated: req.session.loggedIn, user:req.session.user});
};