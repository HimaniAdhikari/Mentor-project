const express=  require("express");
const router = express.Router();
const semController = require("../controller/CSEsemester");
const isAuth = require("../middleware/iaAuth");

router.get("/sem1",isAuth, semController.getSem1);

module.exports = router;