const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker")
const tagModel = require("../models/Tag")
const uploadCloud = require("../config/cloudinary")

router.get("/", (req, res) => {
    sneakerModel.find()
    .then(sneakers => {
      res.render("products_manage", {sneakers});
  });
})

router.get("/product-add", (req, res) => {
    tagModel.find()
    .then(tags => {
        console.log(tags);
        res.render("products_add", {tags})
  });
})
  
  
router.post("/product-add", uploadCloud.single("image"),(req, res, next) => {
    const {name,ref,size,description, price, category, tag} = req.body
    const image = req.file.url;
    const imgName = req.file.originalName
    console.log(req.body)
    sneakerModel.create({name,ref,size,description, price, category, tag, image})
  .then(newsneaker => {
    console.log(newsneaker);
    res.redirect("/dashboard")})
  .catch(dbError => {
    res.send(dbError)
  })
});

router.get("/product-delete/:id", (req, res) => {
  sneakerModel.findByIdAndDelete(req.params.id)
  .then(sneaker => {
    console.log(sneaker);
    res.redirect("/dashboard")})
.catch(err=> console.log(err)
)
});

router.get("/product-edit/:id", (req, res) => {
    console.log(req.params.id);
    sneakerModel.findById(req.params.id)
    .then(sneaker => {
        console.log(sneaker)
        res.render("product_edit", {sneaker})}
    );
});
router.post("/product-edit/:id", (req, res) => {
    const {name,ref,size,description, price, category} = req.body
    sneakerModel.findByIdAndUpdate(req.params.id, {name,
        ref,
        size,
        description,
        price,
        category,
        })
    .then(newsneaker => {
        console.log(newsneaker);
        res.redirect("/dashboard")})
    .catch(err=> console.log(err)
    )
  });

module.exports = router;
