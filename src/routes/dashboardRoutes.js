const express = require("express");
const router = express.Router();

const {
  getSummary,
  getTrends
} = require("../controllers/dashboardController");

const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

router.get("/summary", auth, allowRoles("analyst", "admin", "viewer"), getSummary);
router.get("/trends", auth, allowRoles("analyst", "admin", "viewer"), getTrends);

module.exports = router;