const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const {v4:uuidv4} = require("uuid")

router.get("/",(req,res)=>{
    fs.readFile("./db/db.json",(err,notedata)=>{
err? console.error(err):res.json(JSON.parse(notedata))
    })
})
router.post("/",(req,res)=>{
const notedata = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
const newnote = {
    title:req.body.title, 
    text:req.body.text,
    id:uuidv4()
}
notedata.push(newnote)
fs.writeFileSync("./db/db.json",JSON.stringify(notedata))
res.json(notedata)
})

module.exports = router