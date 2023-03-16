const express = require("express");
const topgradeController = require("../controllers/togradesController");

const router = express.Router();

router.get("/viewTopGrades", topgradeController.index);
router.post("/topGrades/search", topgradeController.searchTopgrades);

module.exports = router;
