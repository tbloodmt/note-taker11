const router = require("express").Router()
const noteroutes = require("./notes.js")

router.use("/notes",noteroutes)

module.exports = router