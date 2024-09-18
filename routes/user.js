const express = require('express');
const UserController = require('../controllers/user');
const {createUser, getUser} = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.getUser);

module.exports = router;
