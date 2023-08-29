"user strict";

// libraries
const { Router, json } = require("express");

const authGuard = require("../middlewares/auth-guard");

// cases
const { handleAsyncError } = require("../utils/handle-async-error");
const { sendResponse } = require("../utils/send-response");
const { getAllPosts, getPostById } = require("../services/db-service");
const { invalidCredentials } = require("../services/error-service");
const newPost = require("../controllers/post/new-post");

const router = Router();

router.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    sendResponse(res, posts);
});

router.get("/posts/:id", async (req, res) => {
    const post = await getPostById(req.params.id);
    sendResponse(res, post);
});

router.post("/posts", authGuard, json(), async (req, res) => {
    if (!req.currentUser) {
        invalidCredentials();
    }
    const token = req.currentUser.token;
    const post = await newPost(req.body, token, res);
    const buildResponse = { ...req.body, ...post.post };
    sendResponse(res, buildResponse, undefined, 201);
});

module.exports = router;
