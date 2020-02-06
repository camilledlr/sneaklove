const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");
const mongoose = require ("mongoose");
const someSneakers = [{
    name: "AirMax",
    ref: "12345",
    sizes: ["39","40"],
    description: "it's a classic sneaker",
    price: 300,
    category: ["men","women"]
},
{
    name: "Converse",
    ref: "1011",
    sizes: ["40","38", "29"],
    description: "it's a rock sneaker",
    price: 60,
    category: ["men","women", "kids"]
},
  {
    name: "Stan Smith",
    ref: "43200",
    sizes: ["22","23","40"],
    description: "it's a urban sneaker",
    price: 80,
    category: ["men","women", "kids"]
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