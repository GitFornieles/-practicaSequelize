const db=require("../db")

const Sequelize = require("sequelize")

class Curso extends Sequelize.Model{}

Curso.init({
    materia:{type:Sequelize.STRING},

},{sequelize:db,modelName:"curso"})

module.exports=Curso