"user strict";

// libraries
const { Router, json } = require("express");

// cases
const validateBody = require("../middlewares/validate-body");

const router = Router();

// GET
router.get("/news");

router.get("/about");

router.get("/tour");

router.get("/video");

router.get("/rider");

router.get("/contact");

// POST

module.exports = router;
