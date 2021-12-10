const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema(
  {
    name: {
      type: String,
      required:true,
    },
    year: {
      type: Number,
      required:true,
    },
    director: {
      type: String,
      required:true,
    },
    rating: {
      type:Number,
      required:true
    }
  },
);

module.exports = mongoose.model("Film", filmSchema);