const express = require("express");
const router = express.Router();
const {signUp} = require("../controllers/users.controller.js")

router.post('/signup',signUp);

module.exports = router;