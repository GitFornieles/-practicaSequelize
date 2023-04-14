const Docente=require("./Docente")
const Alumno=require("./Alumno")
const Curso=require("./Curso")

Alumno.belongsToMany(Curso,{through:"alumnosCursos"}) 
Curso.belongsToMany(Alumno,{through:"alumnosCursos"}) 


//Alumno.hasMany(Curso,{as:"ingregrante"}) en la tabla "alumno" agrego la columna "curso" --> si un alumno esta en varios cursos se multiplica la línea

//Curso.hasMany(Alumno,{as:"ingregrante"}) // en la tabla "Curso" agrego la columna "integrante"

Docente.belongsTo(Curso,{as:"materia"}) //agrega en la tabla "docente" a la columna "materia"
// Docente.hasOne(Curso)
Curso.belongsTo(Docente,{as:"docente"}) //agrega en la tabla "curso" a la columna "docente"
// Curso.hasOne(Docente)


module.exports={Docente,Alumno,Curso}