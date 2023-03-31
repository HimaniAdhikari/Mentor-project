exports.getHomePage = (req,res,next)=>{
    res.render("home/index", {path: "/"});
};

exports.getCoursepage = (req,res,next)=>{
    res.render("home/courses", {path: "/courses"});
};

exports.getContactPage = (req,res,next)=>{
    res.render("home/contact" ,{path: "/contact"});
};

exports.getEventPage = (req,res,next)=>{
    res.render("home/events", {path: "/events"});
};

exports.getToolPage = (req,res,next)=>{
    res.render("home/tools", {path: "/tools"});
};