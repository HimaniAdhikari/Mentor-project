// const gfs = require("../app").gfs;
const Notes = require("../model/notes");
const upload = require("../middleware/upload");

exports.getAddNotesPage = (req,res,next) =>{
    res.render("admin/add-notes",{path:'admin/add-notes', isAuthenticated: req.session.loggedIn, user:req.session.user});
}   

exports.postAddNotesPage = (req,res,next)=>{
    const course = req.body.course.toLowerCase() ;
    const semester = req.body.semester.toLowerCase();
    const subject = req.body.subject.toLowerCase();
    const file = req.file.filename.toLowerCase();
    Notes.findOne({file: file}).then((result)=>{
        if(result){
            console.log("Already exist with this particular file name");
            return res.redirect("/add-notes");
        }
        else{
            const notes = new Notes({
                course:course,
                semester:semester,
                subject:subject,
                file:file
            });
            // upload.single('file');
            
            return notes.save();
        }
    }).then((notes =>{
        res.redirect(`/course/${course}/${semester}/${subject}`);

    }));
    // console.log(req.file.filename);
    // const 

};