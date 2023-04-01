exports.getLoginPage = (req,res,next)=>{
    res.render("auth/login");
};

exports.getRegisterPage = (req,res,next)=>{
    res.render("auth/sign-up");
};

exports.postRegisterPage = (req,res,next) =>{
    const username = req.body.username;
    const password =req.body.password;
    const email = req.body.email;
    
};