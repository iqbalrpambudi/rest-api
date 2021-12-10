const User = require("../model/UserModel")
const jwt = require("jsonwebtoken")
const expressjwt = require("express-jwt")
const bcrypt = require("bcrypt")
require("cookie-parser")

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body

    // check if not sending email & password
    if (!(email && password)) {
      res.status(400).send("All input required")
    }

    // check if email already exist
    const oldUser = await User.findOne({ email })
    if (oldUser) {
      return res.status(409).send("User already exist, please login")
    }

    // if valid
    const encryptedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      email,
      password: encryptedPassword,
    })

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({
      error: "Please enter your email and password",
    })
  }
}

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.json({ Status: "error", error: "Invalid email/password" })
    }
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (passwordCompare) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1800s" }
      )
      return res.json({ user, token: token })
    } else {
      return res.json({ status: "error", error: "Check your password again" })
    }
  } catch (error) {
    console.log(error)
  }
}

exports.isSignedIn = expressjwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
})
