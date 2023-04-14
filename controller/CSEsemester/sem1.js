// gfs = require("../../middleware/gfs");
const Notes = require("../../model/notes");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const MONGODB_URI =
  "mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/NotesProject";


exports.getNotesPage = (req, res, next) => {
  // console.log("abc");
  const course = req.params.course;
  const semester = req.params.semester;
  const subject = req.params.subject;
  console.log(course, semester, subject);
  Notes.find({ course: course, semester: semester, subject: subject }).then(
    (result) => {
      if (result) {
        mongoose.connect(MONGODB_URI).then((mongo) => {
          let gfs = Grid(mongo.connections[0].db, mongoose.mongo);
          gfs.collection('uploads');
          console.log(gfs.files);
    
          gfs.files.find().toArray((err, files) => {
            if (err) console.log("No such file");
            else {
            //   res.render("semesters/notes", {
            //     path: "/courses",

            //     isAuthenticated: req.session.loggedIn,
            //     user: req.session.user,
            //   });
              res.json({ files });
            }
          });
        });
      }
    }
  );
  // console.log(gfs.files.find);
};
