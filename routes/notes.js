const express = require("express");
const notesController = require("../controller/notes");
const isAuth = require("../middleware/iaAuth");
const router = express.Router();

router.get("/:course/:semester/:subject",isAuth,notesController.getNotesPage );

module.exports = router;