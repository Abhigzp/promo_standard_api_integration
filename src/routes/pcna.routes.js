const express = require("express");
const router = express.Router();
const controller = require("../controllers/pcna.controller");

router.get("/product", controller.getProduct);

module.exports = router;