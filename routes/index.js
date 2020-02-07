const express = require("express");
const router = express.Router();
const sneakerModel = require("../models/Sneaker")

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/men", (req, res) => {
  sneakerModel.find({category: "men"})
  .then(sneakers => {
    res.render("products", {sneakers});
  }) 
});

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

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.send("signin");
});


module.exports = router;
