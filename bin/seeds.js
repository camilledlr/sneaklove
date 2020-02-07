const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");
const mongoose = require ("mongoose");
const someSneakers = [{
    name: "AirMax",
    ref: "12345",
    sizes: ["39","40"],
    description: "it's a classic sneaker",
    price: 300,
    image: "https://res.cloudinary.com/dxcmeyci9/image/upload/v1581004611/nike-airmax-95_r08g18.jpg",
    category: "men"
},
{
    name: "Converse",
    ref: "1011",
    sizes: ["40","38", "29"],
    description: "it's a rock sneaker",
    price: 60,
    image:"https://res.cloudinary.com/dxcmeyci9/image/upload/v1581004682/converse-black_w0cf12.jpg",
    category: "women"
},
  {
    name: "Stan Smith",
    ref: "43200",
    sizes: ["22","23","40"],
    description: "it's a urban sneaker",
    price: 80,
    image: "https://res.cloudinary.com/dxcmeyci9/image/upload/v1581004573/stan-smith_lhlgsx.jpg",
    category: "kids"
  }];

  mongoose
  .connect('mongodb://localhost:27017/sneaker-love', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  
sneakerModel.insertMany(someSneakers)
.then(res => console.log("ok db inserted"))
.catch(err => console.log(err))