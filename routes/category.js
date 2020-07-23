var express = require("express");
var router = express.Router();
var db = require("../models/index");



router.get("/", async function (req, res, next) {
    try {
        res.json(await db.Category.findAll({
            attributes: [
                "id",
                "name"
            ]
        }));

    } catch (error) {
        console.log("ther is a error====", error);
    }
});


router.post("/", async function (req, res, next) {
    var category = await db.Category.create(req.body);
    res.json(category);
});


module.exports = router;
