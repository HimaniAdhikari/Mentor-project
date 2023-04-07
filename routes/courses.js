const express = require("express");
const CourseController = require("../controller/courses");
const router = express.Router();
const isAuth  = require("../middleware/iaAuth");

router.get("/btech-CSE",isAuth ,CourseController.getBtechCSI);

router.get("/btech-ECE",isAuth, CourseController.getBtechECE);

router.get("/btech-AI",isAuth, CourseController.getBtechAI);

router.get("/bca",isAuth, CourseController.getBCA);

module.exports = router;