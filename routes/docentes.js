const express = require("express");
const routerDocentes = express.Router();
const Docente = require("../models/Docente");
const Curso = require("../models/Curso");

routerDocentes.get("/", (req, res) => {
  res.send("Llegaste a Docentes");
});

routerDocentes.post("/new", (req, res) => {
  Docente.create(req.body)
    .then((docente) => res.send(docente))
    .catch((err) => console.log(err));
});

routerDocentes.put("/vincular/:docente/:curso", (req, res) => {
  const idDocente = Number(req.params.docente);
  const idCurso = Number(req.params.curso);
  Docente.findByPk(idDocente)
    .then((docenteElegido) => {
      Curso.findByPk(idCurso).then((cursoElegido) => {
        docenteElegido.setMateria(cursoElegido);
        cursoElegido.setDocente(docenteElegido);
      });
    })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
});

module.exports = routerDocentes;
















// Vincular docente-curso con async await
// const docenteElegido=await Docente.findByPk(idDocente)
// const cursoElegido=await Curso.findByPk(idCurso)
// docenteElegido.setMateria(cursoElegido)
// cursoElegido.setDocente(docenteElegido)
