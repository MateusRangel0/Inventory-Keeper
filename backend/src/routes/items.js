var express = require('express');
var router = express.Router();

const controller = require("../controllers/items.controller");

router.get("/", controller.getAll);
router.post("/", controller.create);

module.exports = router;
