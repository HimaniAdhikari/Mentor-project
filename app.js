const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const mongoDbStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

const MONGODB_URI =
  "mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/NotesProject";

const store = mongoDbStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

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
const CSEsemRotutes = require("./routes/CSEsemester");

app.use(HomeRoutes);
app.use(AuthRoutes);
app.use(AdminRoutes);
app.use("/course", CoursesRoutes);
app.use("/course/btech-CSE", CSEsemRotutes);

mongoose.connect(MONGODB_URI).then((result) => {
  app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("Connected to port 3000");
  });
});
