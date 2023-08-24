"user strict";

// libraries
const { Router, json } = require("express");

// cases
const validateBody = require("../middlewares/validate-body");

const router = Router();

// GET
router.get("/news");

router.get("/about");

router.get("/contact");

router.get("/rider");

router.get("/bio");

router.get("/video");

router.get("/tour");

// POST

module.exports = router;
