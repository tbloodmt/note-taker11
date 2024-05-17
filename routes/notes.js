const router = require("express").Router()
const fs = require("fs")
const path = require("path")

router.get("/",(req,res)=>{
    fs.readFile("./db/db.json",(err,notedata)=>{
err? console.error(err):res.json(JSON.parse(notedata))
    })
})

module.exports = router