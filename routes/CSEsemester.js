const express=  require("express");
const router = express.Router();
const semController = require("../controller/CSEsemester");
const isAuth = require("../middleware/iaAuth");

router.get("/sem1",isAuth, semController.getSem1);

router.get("/sem2",isAuth, semController.getSem2);

router.get("/sem3",isAuth, semController.getSem3);

router.get("/sem4",isAuth, semController.getSem4);

router.get("/sem5",isAuth, semController.getSem5);

router.get("/sem6",isAuth, semController.getSem6);

router.get("/sem7",isAuth, semController.getSem7);

router.get("/sem8",isAuth, semController.getSem8);

module.exports = router;