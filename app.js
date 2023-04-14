const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const mongoDbStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const Grid = require("gridfs-stream");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
// gfs = require("./middleware/gfs");
const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

const MONGODB_URI =
  "mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/NotesProject";

// const connect = mongoose.createConnection(MONGODB_URI)

const store = mongoDbStore({
  uri: MONGODB_URI,
  collection: "sessions",
});


const storage = new GridFsStorage({
    url: MONGODB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }
  });

const upload = multer({storage: storage});
app.use(upload.single('file'));


// const fileStorage = multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null, "pdfs")
//   },
//   filename:(req,file,cb)=> {
//     cb(null, new Date().toISOString+'-'+ file.originalname);
//   }
// });

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: false }));


app.use(
  session({
    secret: "this is rawat secret",
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(flash());

const HomeRoutes = require("./routes/home");
const AuthRoutes = require("./routes/auth");
const CoursesRoutes = require("./routes/courses");
const AdminRoutes = require("./routes/admin");
const CSEsemRoutes = require("./routes/CSEsemester");
// const CSEsem1Routes = require("./routes/CSEsemester/sem1");
const isAuth = require("./middleware/iaAuth");
const Notes = require("./model/notes");

app.use(HomeRoutes);
app.use(AuthRoutes);
app.use(AdminRoutes);

app.use("/course", CoursesRoutes);

app.use("/course/Btech-CSE", CSEsemRoutes);
// app.use("/course", CSEsem1Routes);

// Init gfs
let gfs, GridFSBucket;
app.get("/course/:course/:semester/:subject", isAuth, (req, res, next) => {
  const course = req.params.course.toLowerCase();
  const semester = req.params.semester.toLowerCase();
  const subject = req.params.subject.toLowerCase();
  console.log(course, semester, subject);
  Notes.find({ course: course, semester: semester, subject: subject })
    .then((result) => {
      if (result.length > 0) {
        // console.log(gfs.find());
        const cursor = gfs.files.findOne({filename: 'ques.pdf'}).then(
          file =>{
            // console.log(file);
            const readstream = GridFSBucket.openDownloadStream(file._id);
            console.log(readstream);
            readstream.pipe(res);
          }
        );
        
        // cursor.forEach(doc => console.log(doc));
        // gfs.files.find().toArray((err, files) => {
        //   // if (err) console.log(err);
        //   console.log(files);
        //   if (!files || files.length === 0)
        //     return res.status(404).json({ err: 'No file exists' });
        //   else {
        //     //   res.render("semesters/notes", {
        //     //     path: "/courses",
        //     //     isAuthenticated: req.session.loggedIn,
        //     //     user: req.session.user,
        //     //   });
        //     console.log(files);
            // res.json({ data: cursor });
        //   }
        // });
      } else {
        res.json({ err: "No data found" });
      }
    })
    .catch((err) => {
      // Handle any errors that occur during the database query
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    });
});


// const connect = mongoose.createConnection(MONGODB_URI);
// connect.once('open', ()=>{
//   gfs = Grid(connect.db, mongoose.mongo);
//   gfs.collection('uploads');
// })


mongoose.connect(MONGODB_URI).then((result) => {
  
  // console.log(result.connections[0].db);
  // module.exports = gfs;
  GridFSBucket = new mongoose.mongo.GridFSBucket(result.connections[0].db,{
    bucketName:"uploads"
  });
  GridFSBucket.openDownloadStream
  // cur = gfs.find({filename: 'ques.pdf'}).then(file=>{console.log(file);});
  // cur.forEach(docs=>{console.log(docs);})
  // console.log(mongoose.mongo);
  gfs = Grid(result.connections[0].db, mongoose.mongo);
  gfs.collection('uploads');
  // gfs.createReadStream
  // const cur = gfs.files.find();
  // cur.forEach(doc => console.log(doc));
  // gfs.files.find().toArray((err, files) => {
  //   if (err) console.log(err);
    
  //   else {
  //   //   res.render("semesters/notes", {
  //   //     path: "/courses",

  //   //     isAuthenticated: req.session.loggedIn,
  //   //     user: req.session.user,
  //   //   });
  //   console.log(files);
  //   }
  // });
  app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("Connected to port 3000");
  });
});

