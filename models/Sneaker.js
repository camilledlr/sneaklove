const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref:String,
  size:Number,
  description:String,
  price:Number,
  category:String,
  image:String,
  id_tags: [Schema.Types.ObjectId]
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;
