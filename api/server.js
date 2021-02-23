const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const theRouter = require("./route/path.js")

const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/___", theRouter)

server.get("/", (req, res) => {
  res.json({api: "up"})
})

module.exports = server