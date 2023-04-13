const express=require("express")
const routerAlumnos=express.Router()
const Alumno=require("../models/Alumno")


routerAlumnos.get("/",(req,res)=>{
    res.send("Llegaste a Alumnos")
})

routerAlumnos.post("/new",(req,res)=>{
    Alumno.create(req.body).then(alumno=>res.send(alumno)).catch(err=>console.log(err))
})



module.exports=routerAlumnos