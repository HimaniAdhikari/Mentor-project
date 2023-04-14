// gfs = require("../../middleware/gfs");
const Notes = require("../../model/notes");

exports.getNotesPage = (req, res, next) => {
  // console.log("abc");
  const course = req.params.course;
  const semester = req.params.semester;
  const subject = req.params.subject;
  console.log(course, semester, subject);
  Notes.find({ course: course, semester: semester, subject: subject }).then(
    (result) => {
      if (result) {
          return res.render('semesters/notes',{
            files: result,
            subject: subject
          });
      }
      else{
        return res.render('semesters/notes',{
          files: [],
          subject: subject      
        });
      }
    }
  ).catch(err => {
    console.log(err);
  });
  // console.log(gfs.files.find);
};
