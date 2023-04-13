const express = require("express");
const router = express.Router();

const isAuth = require("../../middleware/iaAuth");
const sem1Controller = require("../../controller/CSEsemester/sem1");

router.get("/:course/:semester/Applied%20physics",isAuth,sem1Controller.getAppliedPhysics );

module.exports = router;