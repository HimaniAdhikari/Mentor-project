const express = require("express");
const router = express.Router();
const HomeController = require("../controller/home");

router.get("/", HomeController.getHomePage);

router.get("/courses", HomeController.getCoursepage);

router.get("/contact", HomeController.getContactPage);

router.get("/events", HomeController.getEventPage);

router.get("/tools", HomeController.getToolPage);

module.exports = router;