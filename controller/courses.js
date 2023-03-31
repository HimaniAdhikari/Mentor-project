exports.getBtechCSI = (req,res,next)=>{
    res.render("courses/btech-cse", {path: "/courses"});
};

exports.getBtechECE = (req,res,next)=>{
    res.render("courses/btech-ece", {path: "/courses"});
};

exports.getBtechAI = (req,res,next)=>{
    res.render("courses/btech-ai", {path: "/courses"});
};

exports.getBCA = (req,res,next)=>{
    res.render("courses/bca", {path: "/courses"});
};