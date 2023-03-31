const express = require("express");
const CourseController = require("../controller/courses");
const router = express.Router();

router.get("/btech-CSE", CourseController.getBtechCSI);

router.get("/btech-ECE", CourseController.getBtechECE);

router.get("/btech-AI", CourseController.getBtechAI);

router.get("/bca", CourseController.getBCA);

module.exports = router;