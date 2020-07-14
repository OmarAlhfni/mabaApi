var express = require("express");
var router = express.Router();
var db = require("../models/index");
/* GET home page. */
router.post("/", async function (req, res, next) {
    var category = await db.category.create(req.body);
    res.json(category);
});


module.exports = router;
