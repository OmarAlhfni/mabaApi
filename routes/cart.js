var express = require("express");
var router = express.Router();
var db = require("../models/index");
/* GET home page. */
router.post("/add", async function (req, res, next) {
  var cart = await db.Cart.create(req.body);
  res.json(cart);
});

router.get('/', async (req, res, next) => {
  var cart = await db.Cart.findAll({})
  res.json({ cart })
})

router.get('/:id', async (req, res, next) => {
  var cart = await db.Cart.findAll({
    where: { userId: req.params.id },
    attributes: ['id', 'count'],
    include: [
      { model: db.Product, attributes: ['title', 'subTitle', 'price'] },
    ]
  });
  res.json(cart)
})

router.delete("/:id", async (req, res) => {
  var cart = await db.Cart.destroy({ where: { id: req.params.id } });
  res.json(cart);
});


module.exports = router;
