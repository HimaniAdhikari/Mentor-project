
exports.getAddNotesPage = (req,res,next) =>{
    res.render("admin/add-notes",{path:'admin/add-notes', isAuthenticated: req.session.loggedIn, user:req.session.user});
}