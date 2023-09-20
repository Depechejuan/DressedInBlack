"user strict";

// libraries
const { Router, json } = require("express");
const multer = require("multer");
const upload = multer();

const authGuard = require("../middlewares/auth-guard");

// cases
const { sendResponse } = require("../utils/send-response");
const { getAllPosts, getPostById } = require("../services/db-service");
const { invalidCredentials } = require("../services/error-service");
const newPost = require("../controllers/post/new-post");
const editPost = require("../controllers/post/edit-post");
const createTour = require("../controllers/post/create-tour");
const editTour = require("../controllers/post/edit-tour");
const addPhotoToPost = require("../controllers/post/add-post-photo");
const addPhotoToTour = require("../controllers/post/add-tour-photo");
const addPhotoToUser = require("../controllers/post/add-user-photo");

const router = Router();

router.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    sendResponse(res, posts);
});

router.get("/posts/:id", async (req, res) => {
    const post = await getPostById(req.params.id);
    sendResponse(res, post);
});

router.post("/dibposts", authGuard, json(), async (req, res) => {
    if (!req.currentUser) {
        invalidCredentials();
    }
    const token = req.currentUser.token;
    const post = await newPost(req.body, token, res);
    const buildResponse = { ...req.body, ...post.post };
    sendResponse(res, buildResponse, undefined, 201);
});

router.put("/posts/:id", authGuard, json(), async (req, res) => {
    if (!req.currentUser) {
        throw invalidCredentials();
    }
    const idPost = req.params.id;
    const idUser = req.currentUser.id;
    const payload = req.body;
    const post = await editPost(idPost, idUser, payload);
    console.log("Post en Endpoint", post);
    sendResponse(res);
});

router.post("/tour", authGuard, json(), async (req, res) => {
    if (!req.currentUser) {
        throw invalidCredentials();
    }
    const token = req.currentUser.token;
    const tourDate = await createTour(req.body, token);
    sendResponse(res, tourDate);
});

router.put("/tour/:id", authGuard, json(), async (req, res) => {
    const idTour = req.params.id;
    const tour = req.body;
    const newTourDate = await editTour(idTour, tour);
    sendResponse(res, newTourDate);
});

router.put(
    "/dibposts/:id/photos",
    authGuard,
    upload.array("photos", 10),
    async (req, res) => {
        const photos = req.files;
        console.log(photos);
        const method = "post";
        const sendPhotos = await addPhotoToPost(
            method,
            req.params.id,
            req.currentUser.id,
            photos
        );
        sendResponse(res, sendPhotos);
    }
);

router.put(
    "/tour/:id/photos",
    authGuard,
    upload.array("photos", 10),
    async (req, res) => {
        console.log("Subiendo fotos...");
        const photos = req.files;
        console.log(photos);
        const method = "tour";
        const sendPhotos = await addPhotoToTour(
            method,
            req.params.id,
            req.currentUser.id,
            photos
        );
        sendResponse(res, sendPhotos);
    }
);

module.exports = router;
