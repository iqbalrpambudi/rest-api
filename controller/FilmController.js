const Film = require("../model/FilmModel")

exports.createFilm = async (req, res) => {
  const film = new Film({
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
    rating: req.body.rating,
  })

  try {
    const save = await film.save()
    res.json(save)
  } catch (error) {
    res.send(error)
  }
}

exports.getFilm = async (req, res) => {
  try {
    const listFilm = await Film.find()
    res.json(listFilm)
  } catch (error) {
    res.send(error)
  }
}

exports.updateFilm = async (req, res) => {
  const updateFilm = await Film.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(updateFilm)
}
