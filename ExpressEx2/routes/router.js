const express = require("express");
const messageController = require("../controllers/message");

const router = express.Router();

router.get("/msg", messageController.getMessages);
router.post("/sendMsg", messageController.postMessage);

module.exports = router;
