var express = require("express");
var router = express.Router();
var { userLogin, logout } = require("../controllers/user");
var { validateToken } = require("../middleware/authentication");

/* GET users listing. */
router.post("/", userLogin);
router.delete("/logout", validateToken, logout);

module.exports = router;
