const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker")

router.get("/", (req, res) => {
    sneakerModel.find()
    .then(sneakers => {
      console.log(sneakers)
      res.render("products_manage", {sneakers});
  });
})

router.get("/product-add", (req, res) => {

    res.render("products_add");
  });
  
  
router.post("/product-add", (req, res) => {
  sneakerModel.create(req.body)
  .then(res => {
    console.log(res)
  })
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
