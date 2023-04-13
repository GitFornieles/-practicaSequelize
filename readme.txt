EJERCICIO DE REPASO
Node - Express - Sequelize

Objetivo: Englobar en una sola resolución las prácticas de uso de Node, servidor con Express, ORM Sequelize para gestión de Base de Datos (PostgreSQL)

Contexto:
Una institución educativa quiere gestionar su actividad desde una aplicación Web.
En principio, el primer módulo que requieren será solamente para administrar la información académica.
La información a almacenar y administrar es referida a los docentes, los alumnos y los cursos


Este ejercicio consiste en:
Realizar el Schema Design, identificando las entidades principales y sus relaciones
Crear la base de datos
Crear el servidor en Express
Utilizar la arquitectura de Sequelize para manipular la Base de Datos (creación de modelos, vinculación a Express, declarando las relaciones entre entidades)
Trabajar con Express Router para organizar las rutas
Crear las rutas que permitan:
Crear usuario/curso/docente
Modificar usuario/curso/docente
Eliminar usuario/curso/docente
Recuperar lista completa de alumnos en el sistema
Recuperar lista completa de docentes en el sistema
Recuperar lista completa de cursos en el sistema
Recuperar la lista de todos los cursos que detalle todos los alumnos inscriptos
Recuperar para un curso particular la lista de alumnos inscriptos
Recuperar una lista que liste los cursos con la cantidad de alumnos en cada uno.
Nota: Cada docente puede dictar clases en un sólo curso, cada curso es dictado por un solo docente
