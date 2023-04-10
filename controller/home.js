const User = require("../model/user");
exports.getHomePage = (req, res, next) => {
  User.countDocuments().then((numberOfUsers) => {
    // console.log(numberOfUsers);
    res.render("home/index", {
      path: "/",
      isAuthenticated: req.session.loggedIn,
      user: req.session.user,
      numOfUsers: numberOfUsers
    });
  });
};

exports.getCoursepage = (req, res, next) => {
  res.render("home/courses", {
    path: "/courses",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
    errorMessage: req.flash("error"),
  });
};

exports.getContactPage = (req, res, next) => {
  res.render("home/contact", {
    path: "/contact",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
  });
};

exports.getEventPage = (req, res, next) => {
  res.render("home/events", {
    path: "/events",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
  });
};

exports.getToolPage = (req, res, next) => {
  res.render("home/tools", {
    path: "/tools",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
  });
};
