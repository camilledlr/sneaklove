const express = require("express");
const router = express.Router();
const sneakerModel = require("../models/Sneaker")

router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/sneakers/:cat", (req, res) => {
//   res.send("bar");
// });

router.get("/sneakers", (req, res) => {
  sneakerModel.find()
  .then(sneakers => {
    console.log(sneakers)
    res.render("products", {sneakers});
  })
  .catch(dbError => {
    res.send(dbError)
  })
});

router.get("/one-product/:id", (req, res) => {
  res.render("baz");
});


module.exports = router;
