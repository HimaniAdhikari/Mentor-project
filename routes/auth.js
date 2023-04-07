const express = require("express");
const AuthController = require("../controller/auth");
const router = express.Router();

router.get("/login", AuthController.getLoginPage);

router.get("/signup", AuthController.getRegisterPage);

router.post("/signup", AuthController.postRegisterPage);

router.post("/login", AuthController.postLoginPage);

router.post("/logout", AuthController.postLogout);

module.exports = router;