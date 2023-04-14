// gfs = require("../../middleware/gfs");
const Notes = require("../model/notes");

exports.getNotesPage = (req, res, next) => {
  // console.log("abc");
  const course = req.params.course.toLowerCase();
  const semester = req.params.semester.toLowerCase();
  const subject = req.params.subject.toLowerCase();
  console.log(course,semester,subject);
  Notes.find({ course: course, semester: semester, subject: subject }).then(
    (result) => {
        return res.render('semesters/notes',{
        files: result,
        subject: subject,
        path: "/courses",
        isAuthenticated: req.session.loggedIn,
        user: req.session.user,
        });
    }
  ).catch(err => {
    console.log(err);
  });
  // console.log(gfs.files.find);
};
