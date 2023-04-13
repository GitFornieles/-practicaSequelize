const Docente=require("./Docente")
const Alumno=require("./Alumno")
const Curso=require("./Curso")

Alumno.hasMany(Curso) //en la tabla "alumno" agrego la columna "curso" --> si un alumno esta en varios cursos se multiplica la línea
//Curso.hasMany(Alumno,{as:"ingregrante"}) // en la tabla "Curso" agrego la columna "integrante"

Docente.belongsTo(Curso,{as:"materia"}) //agrega en la tabla "docente" a la columna "materia"
Curso.belongsTo(Docente,{as:"docente"}) //agrega en la tabla "curso" a la columna "docente"


module.exports={Docente,Alumno,Curso}