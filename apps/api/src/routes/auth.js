"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
router.post('/login', controllers_1.authController.login);
router.post('/loginGoogle', controllers_1.authController.loginWithGoogle);
router.post('/registration', controllers_1.authController.registration);
exports["default"] = router;
