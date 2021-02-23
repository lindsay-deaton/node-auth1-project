const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const usersRouter = require("./users/users-router.js")
const authRouter = require("./auth/auth-router.js")

const server = express()

// const config = {
//   name: "sessionId",
//   secret: "Secret safe with me.",
//   cookie: {
//     //insert more info here when watching video.
//   }
// }

// server.use(session(config))
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/users", usersRouter)
// server.use("/api/auth", authRouter)

server.get("/", (req, res) => {
  res.json({api: "up"})
})

module.exports = server