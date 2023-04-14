const express=require("express")
const routerAlumnos=express.Router()
const Alumno=require("../models/Alumno")
const Curso=require("../models/Curso")


routerAlumnos.get("/",(req,res)=>{
    Alumno.findAll().then(result=>res.send(result)).catch(err=>console.log(err))
})

routerAlumnos.post("/new",(req,res)=>{
    Alumno.create(req.body).then(alumno=>res.send(alumno)).catch(err=>console.log(err))
})

routerAlumnos.put("/vincular/:alumno/:curso",(req,res)=>{
    const idAlumno=Number(req.params.alumno)
    const idCurso=Number(req.params.curso)
    Alumno.findByPk(idAlumno).then((alumnoElegido)=>{
        Curso.findByPk(idCurso).then((cursoElegido)=>alumnoElegido.addCurso(cursoElegido))
    }).then(result=>res.status(200).send(result)).catch(err=>console.log(err))
})



module.exports=routerAlumnos












// vincular con async await
// const alumnoElegido=await Alumno.findByPk(idAlumno)
// const cursoElegido=await Curso.findByPk(idCurso)
// alumnoElegido.addCurso(cursoElegido)