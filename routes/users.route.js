const express = require("express");
const router = express.Router();
const {signUp,loginUser} = require("../controllers/users.controller.js")

router.post('/signup',signUp);
router.post('/login',loginUser)

module.exports = router;