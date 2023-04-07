const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin");

const isAdmin = require("../middleware/isAdmin");

router.get("/admin/add-notes",isAdmin, AdminController.getAddNotesPage);

module.exports = router