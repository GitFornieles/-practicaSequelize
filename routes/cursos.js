const express = require("express");
const routerCursos = express.Router();
const sequelize = require("sequelize");
const Curso = require("../models/Curso");
const Docente = require("../models/Docente");
const { alumnosCursos } = require("../models");
const Alumno=require("../models/Alumno")

routerCursos.get("/", (req, res) => {
  Curso.findAll({ include: { model: Docente, as: "docente" } })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

routerCursos.get("/poblacionCursos", (req, res) => {
  alumnosCursos
    .findAll({include:{model:Curso}})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

routerCursos.post("/new", (req, res) => {
  Curso.create(req.body)
    .then((curso) => res.send(curso))
    .catch((err) => console.log(err));
});

module.exports = routerCursos;
