const express = require("express");
const routerCursos = express.Router();
const sequelize = require("sequelize");
const { alumnosCursos,Curso,Docente,Alumno } = require("../models");


routerCursos.get("/", (req, res) => {
  Curso.findAll({ include: { model: Docente, as: "docente" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

routerCursos.get("/poblacionCursos", (req, res) => {
  alumnosCursos
    .findAll({include:[{model:Curso},{model:Alumno}]})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

routerCursos.post("/new", (req, res) => {
  Curso.create(req.body)
    .then((curso) => res.send(curso))
    .catch((err) => console.log(err));
});

module.exports = routerCursos;
