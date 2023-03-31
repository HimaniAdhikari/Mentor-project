const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join( __dirname, "public")));
app.use(bodyparser.urlencoded({extended:false}));

const HomeRoutes = require("./routes/home");
const AuthRoutes = require("./routes/auth");
const CoursesRoutes = require("./routes/courses");

app.use(HomeRoutes);
app.use(AuthRoutes);
app.use("/course", CoursesRoutes);

app.listen(3000, (err)=>{
    if(err)
        console.log(err);
    console.log("Connected to port 3000");
});
