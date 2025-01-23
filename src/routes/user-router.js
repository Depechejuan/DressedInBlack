"user strict";

// libraries
const { Router, json } = require("express");
const multer = require("multer");
const upload = multer();

// cases
const { login } = require("../controllers/user/login");
const { sendResponse } = require("../utils/send-response");
const { register } = require("../controllers/user/register");
const authGuard = require("../middlewares/auth-guard");
const controlPanel = require("../controllers/user/control-panel");
const { newsletter } = require("../controllers/user/newsletter.js");
const {
    getTour,
    getTourByID,
    getAllUsersFull,
} = require("../services/db-service");
const addPhotoToUser = require("../controllers/post/add-user-photo");
const mailer = require("../services/mailer");
const { sendError } = require("../utils/send-error.js");

const router = Router();

router.get("/test", json(), async (req, res) =>{
    return "Working"
})

// GET

router.get("/tour", json(), async (req, res) => {
    const tour = await getTour();
    sendResponse(res, tour);
});

router.get("/tour/:id", json(), async (req, res) => {
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
        sendError(res, err);
    }
});

router.post("/newsletter", json(), async (req, res) => {
    try {
        await newsletter(req.body);
        sendResponse(res, req.body);
    } catch (err) {
        console.error(err);
        sendError(res, err);
    }
});

// mail
router.post("/dibcontact", json(), async (req, res) => {
    const mail = req.body;
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
        const photos = req.files;
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
