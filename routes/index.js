const express = require("express");
const router = express.Router();
const sneakerModel = require("../models/Sneaker")
const tagModel = require("../models/Tag")

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/men", (req, res) => {
  sneakerModel.find({category: "men"})
  .then(sneakers => {
    res.render("products", {sneakers});
  }) 
});
// router.get("/sneakers/:cat", (req, res) => {
//   sneakerModel.find({category: (req.params.id)})
//   .then(sneakers => {
//     res.render("products", {sneakers});
//   }) 
// });

router.get("/sneakers/women", (req, res) => {
  sneakerModel.find({category: "women"})
  .then(sneakers => {
    res.render("products", {sneakers});
  }) 
});

router.get("/sneakers/kids", (req, res) => {
  sneakerModel.find({category: "kids"})
  .then(sneakers => {
    res.render("products", {sneakers});
  }) 
});

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
})
  .catch(dbError => {
    res.send(dbError)
  })
})


router.get("/one-product/:id", (req, res) => {
  sneakerModel.findById(req.params.id)
  .then(sneaker => res.render("one_product", {sneaker}))
});


module.exports = router;
