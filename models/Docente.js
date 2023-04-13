const db=require("../db")

const Sequelize = require("sequelize")

class Docente extends Sequelize.Model{}

Docente.init({
    nombre:{type:Sequelize.STRING},
    apellido:{type:Sequelize.STRING},
    profesion:{type:Sequelize.STRING}
},{sequelize:db,modelName:"docente"})

module.exports=Docente