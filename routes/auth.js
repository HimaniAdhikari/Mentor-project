const express = require("express");
const AuthController = require("../controller/auth");
const router = express.Router();

router.get("/auth", AuthController.getAuthPage);

module.exports = router;