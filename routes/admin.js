const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin");

const isAdmin = require("../middleware/isAdmin");


  

router.get("/admin/add-notes",isAdmin, AdminController.getAddNotesPage);

router.post("/admin/add-notes",isAdmin, AdminController.postAddNotesPage);

module.exports = router