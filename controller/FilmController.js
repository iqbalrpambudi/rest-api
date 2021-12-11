const Film = require("../model/FilmModel")

exports.createFilm = async (req, res) => {
  const film = new Film({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    genre: req.body.genre,
    languages: req.body.languages,
    directors: req.body.directors,
    actors: req.body.actors,
    runtime: req.body.runtime,
  })

  try {
    const save = await film.save()
    res.json(save)
  } catch (error) {
    res.send(error)
  }
}

exports.getFilm = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const sort = req.query.sort || "asc"
  const sort_by = req.query.sort_by || "title"

  try {
    const results = await Film.find()
      .sort({ [sort_by]: sort === "asc" ? 1 : sort === "desc" ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(limit)

    const totalItems = await Film.countDocuments()

    const totalPages = Math.ceil(totalItems / limit)

    res.status(200).send({
      data: results,
      paging: {
        total_items: totalItems,
        per_page: limit,
        current_pages: page,
        total_pages: totalPages,
        start_number: (page - 1) * limit + 1,
        end_number: (page - 1) * limit + limit,
      },
    })
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
