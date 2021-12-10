const express = require("express")
const router = express.Router()
const FilmController = require("../controller/FilmController")
const AuthController = require("../controller/AuthController")
const { isSignedIn } = require("../controller/AuthController")

router.get("/", (req, res) => {
  res.send("Hello World")
})

router.post("/film", FilmController.createFilm)
router.get("/film", FilmController.getFilm)
router.put("/film/:id", FilmController.updateFilm)
router.post("/signup", AuthController.signup)
router.post("/signin", AuthController.signin)
router.get("/test", isSignedIn, (req, res) => {
  res.send("A protected route")
  res.json(req.auth)
})

module.exports = router

// const express = require('express')
// const router = express.Router()

// const FilmSchema = require('../model/filmSchema');

// router.route('/').get((req, res) => {
//   filmSchema.find((error, data) => {
//     if (error) {
//       console.log(error)
//     } else {
//       res.send("Welcome to my Film API :)")
//     }
//   })
// })

// // Create new Film
// router.route('/film').post((req, res,next) => {
//   filmSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.send(data)
//     }
//   })
// });

// router.route('/update-user/:id').put((req, res, next) => {
//   filmSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('User updated successfully !')
//     }
//   })
// })

// router.route('/delete-user/:id').delete((req, res, next) => {
//   filmSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// module.exports = router;
