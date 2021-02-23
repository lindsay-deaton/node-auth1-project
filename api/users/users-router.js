const router = require("express").Router();
const Users = require("./users-model.js")

// const restricted = (res, req, next) => {
//   if (req.session && req.session.user) {
//     next()
//   } else {
//     res.status(401).json("You're unauthroized")
//   }
// }

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.send(err));
})

module.exports = router