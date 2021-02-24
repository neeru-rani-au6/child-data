var express = require("express");
var router = express.Router();
var {
  addState,
  getState,
  addDistrict,
  getDistrict,
} = require("../controllers/address");
var { validateToken } = require("../middleware/authentication");

/* GET users listing. */
router.post("/state", validateToken, addState);
router.get("/getState", validateToken, getState);
router.post("/district", validateToken, addDistrict);
router.get("/getDistrict", validateToken, getDistrict);

module.exports = router;
