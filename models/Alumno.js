const db=require("../db")

const Sequelize = require("sequelize")

class Alumno extends Sequelize.Model{}

Alumno.init({
    nombre:{type:Sequelize.STRING},
    apellido:{type:Sequelize.STRING},
    edad:{type:Sequelize.INTEGER},
},{sequelize:db,modelName:"alumno"})

module.exports=Alumno