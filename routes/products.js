var express = require("express");
var router = express.Router();
var db = require("../models/index");

router.get("/", async function (req, res, next) {
  var products = await db.Product.findAll({ include: { model: db.Category, attributes: ['name'] } });
  res.json(products);
});

router.post("/by-category", async function (req, res, next) {
  var products = await db.Product.findAll({
    where: { CategoryId: req.body.id }
  });
  res.json(products);
});

router.get("/:id", async function (req, res, next) {
  var product = await db.Product.findByPk(req.params.id);
  res.json(product);
});

router.post("/", async (req, res) => {
  var product = await db.Product.create(req.body);
  res.json(product);
});

router.put("/", async (req, res) => {
  var product = await db.Product.update(req.body, { where: { id: req.body.id } });
  res.json(product);
});

router.delete("/:id", async (req, res, next) => {
  try {
    var product = await db.Product.destroy({ where: { id: req.params.id } });
    res.json(product);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
