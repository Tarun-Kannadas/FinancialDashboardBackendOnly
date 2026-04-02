const express = require("express");
const router = express.Router();

const { getUsers, updateUserStatus } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

router.get("/", auth, allowRoles("admin"), getUsers);
router.put("/:id/status", auth, allowRoles("admin"), updateUserStatus);

module.exports = router;