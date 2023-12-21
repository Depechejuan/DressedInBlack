"use strict";

const { Router } = require("express");

const userRouter = require("./user-router.js");
const postRouter = require("./post-router.js");

const router = Router();
router.use(userRouter);
router.use(postRouter);

module.exports = router;
