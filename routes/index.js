const express = require("express");
const router = express.Router();
const sneakerModel = require("../models/Sneaker")

router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/sneakers/:cat", (req, res) => {
//   res.send("bar");
// });

router.get("/sneakers/collection", (req, res) => {
  Promise.all([
    tagModel.find(),
    sneakerModel.find()
  ])
  .then(dbRes => {
    res.render("products", {
      tags: dbRes[0],
      sneakers: dbRes[1]
  })
  .catch(dbError => {
    res.send(dbError)
  })
});



router.get("/one-product/:id", (req, res) => {
  res.render("baz");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.send("signin");
});


module.exports = router;
