var express = require("express");
var router = express.Router();
var { addChild, getChild, getOneChild } = require("../controllers/child");
var { validateToken } = require("../middleware/authentication");

/* GET users listing. */
router.post("/", validateToken, addChild);
router.get("/get", validateToken, getChild);
router.get("/:id", validateToken, getOneChild);

module.exports = router;
