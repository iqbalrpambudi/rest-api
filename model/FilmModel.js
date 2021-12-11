const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  users_rating: {
    type: String,
  },
  votes: {
    type: Number,
  },
  languages: {
    type: String,
    required: true,
  },
  directors: {
    type: String,
    required: true,
  },
  actors: {
    type: [String],
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Film", filmSchema)
