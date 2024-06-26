const express = require("express");
const router = express.Router();
const {signUp,loginUser,searchForUsers} = require("../controllers/users.controller.js")

router.post('/signup',signUp);
router.post('/login',loginUser);
router.get('/',searchForUsers)

module.exports = router;