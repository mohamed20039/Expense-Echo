const express = require("express");
const { login, register } = require("../Controllers/UserControllers");
const router = express.Router();

//Routes
router.post("/", register);
router.post("/login", login);

module.exports = router;
