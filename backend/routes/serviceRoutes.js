const express = require("express");
const router = express.Router();
const {
  createService,
  getServices,
} = require("../controllers/serviceController");
const upload = require("../middleware/upload");

// POST /api/services — with thumbnail upload
router.post("/", upload.single("thumbnail"), createService);

// GET /api/services/get
router.get("/get", getServices);

module.exports = router;
