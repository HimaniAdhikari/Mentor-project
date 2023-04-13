
const Notes = require("../model/notes");

exports.getAddNotesPage = (req,res,next) =>{
    res.render("admin/add-notes",{path:'admin/add-notes', isAuthenticated: req.session.loggedIn, user:req.session.user});
}   

exports.postAddNotesPage = (req,res,next)=>{
    const course = req.body.course ;
    const semester = req.body.semester;
    const subject = req.body.subject;
    const file = req.file.filename;
    Notes.find({file: file}).then((res)=>{
        if(res){
            console.log("Already exist with this particular file name");
            return res.redirect("/admin/add-notes");
        }
        else{
            const notes = new Notes({
                course:course,
                semester:semester,
                subject:subject,
                file:file
            });
            return notes.save();
        }
    }).then((notes =>{

    }))
    Notes.save()
    console.log(req.file.filename);
    // const 
    res.redirect("/");
};