const express = require("express");
const gradeController = require("../controllers/gradesController");

const router = express.Router();

router.get("/viewGrades", gradeController.index);
router.post("/grades/search", gradeController.searchGrades);

module.exports = router;
