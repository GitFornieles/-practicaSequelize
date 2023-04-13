const express=require("express")
const routerCursos=express.Router()
const Curso=require("../models/Curso")


routerCursos.get("/",(req,res)=>{
    res.send("Llegaste a Cursos")
})

routerCursos.post("/new",(req,res)=>{
    Curso.create(req.body).then(curso=>res.send(curso)).catch(err=>console.log(err))
})

module.exports=routerCursos