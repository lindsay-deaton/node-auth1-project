const express = require("express")
const { userParams } = require("../../data/db-config.js")
const router = express.Router()
const Users = require("../users/users-model.js")
// const bcrypt = require("bcryptjs")

router.post("/register", (req, res) => {
  res.json('silly register')
  // Users.insert(req.body)
  // .then(200).json({})
})
module.exports = router;

router.post("/login", (req, res) => {
    res.json('silly login')

  // Users.insert(req.body)
  //   .then(200).json()
})

router.get("/logout", (req, res) => {
    res.json('silly logout')

  // Users.findById(req.params.id)
})