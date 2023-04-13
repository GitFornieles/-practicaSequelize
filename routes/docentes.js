const express=require("express")
const routerDocentes=express.Router()
const Docente=require("../models/Docente")

routerDocentes.get("/",(req,res)=>{
    res.send("Llegaste a Docentes")
})

routerDocentes.post("/new",(req,res)=>{
    Docente.create(req.body).then(docente=>res.send(docente)).catch(err=>console.log(err))
})


module.exports=routerDocentes