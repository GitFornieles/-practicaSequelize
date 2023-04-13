const express=require("express")
const router=express.Router()
const routerAlumnos=require("./alumnos")
const routerDocentes=require("./docentes")
const routerCursos=require("./cursos")

router.use("/alumnos",routerAlumnos)
router.use("/docentes",routerDocentes)
router.use("/cursos",routerCursos)

module.exports = router