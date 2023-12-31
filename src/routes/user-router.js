"user strict";

// libraries
const { Router, json } = require("express");
const multer = require("multer");
const upload = multer();

// cases
const validateBody = require("../middlewares/validate-body");
const { handleAsyncError } = require("../utils/handle-async-error");
const { login } = require("../controllers/user/login");
const { sendResponse } = require("../utils/send-response");
const { register } = require("../controllers/user/register");
const authGuard = require("../middlewares/auth-guard");
const controlPanel = require("../controllers/user/control-panel");
const { newsletter } = require("../controllers/user/newsletter.js");
const {
    getFullUserById,
    getTour,
    getTourByID,
    getAllUsersFull,
} = require("../services/db-service");
const addPhotoToUser = require("../controllers/post/add-user-photo");
const mailer = require("../services/mailer");

const router = Router();

// GET

router.get("/tour", json(), async (req, res) => {
    const tour = await getTour();
    sendResponse(res, tour);
});

router.get("/tour/:id", json(), async (req, res) => {
    console.log("tour");
    const tour = await getTourByID(req.params.id);
    sendResponse(res, tour, 200);
});

router.get("/video");

router.get("/rider");

router.get("/contact");

router.get("/users", json(), async (req, res) => {
    const user = await getAllUsersFull();
    sendResponse(res, user);
});

// POST
router.post("/dibreg", json(), async (req, res) => {
    const result = await register(req.body);
    sendResponse(res, result);
});

router.post("/diblog", json(), async (req, res) => {
    try {
        const token = await login(req.body);
        sendResponse(res, token);
    } catch (err) {
        console.error(err);
        if (err.code === "INVALID_CREDENTIALS") {
            sendResponse(res, { error: "Invalid email or password" }, 400);
        } else {
            sendResponse(res, { error: "Internal Server Error" }, 500);
        }
    }
});

router.post("/newsletter", json(), async (req, res) => {
    try {
        console.log("The data we have");
        console.log(req.body);
        console.log("now, send to newsletter");
        await newsletter(req.body);
        sendResponse(res, req.body);
    } catch (err) {
        console.error(err);
        sendResponse(res, err);
    }
});

// mail
router.post("/dibcontact", json(), async (req, res) => {
    const mail = req.body;
    console.log(mail);
    await mailer(mail);
    sendResponse(res);
});

// PUT
router.put("/users/:id", authGuard, json(), async (req, res) => {
    const idUser = req.params.id;
    const userInfo = req.body;
    const info = await controlPanel(idUser, userInfo);
    sendResponse(res, info, undefined, 201);
});

router.put(
    "/users/:id/photo",
    authGuard,
    upload.array("photos", 1),
    async (req, res) => {
        console.log("editando foto de usuario - Endpoint");
        const photos = req.files;
        console.log(photos);
        const method = "user";
        const sendPhotos = await addPhotoToUser(
            method,
            req.params.id,
            req.currentUser.id,
            photos
        );
        sendResponse(res, sendPhotos);
    }
);

module.exports = router;
