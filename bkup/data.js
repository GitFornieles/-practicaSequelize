// [
//     '{{repeat(100)}}',
//     {
//       edad: '{{integer(20, 40)}}',
//       nombre: '{{firstName()}}',
//       apellido:' {{surname()}}'
//     }
//   ]
//   [
//     '{{repeat(10)}}',
//     {
//       profesion: '{{random("Salesman","Electrician","Producer","Mechanic","Astronomer","Journalist","Jeweller","Fashion Designer","Meteorologist","Historian")}}',
//       nombre: '{{firstName()}}',
//       apellido:' {{surname()}}'
//     }
//   ]
//   [
//     '{{repeat(10)}}',
//     {
//       materia: '{{random("Matemática","Geografía","Programación","Química","Literatura","Historia","Física","Ed. Física","Música","Recreo")}}'
//     }
//   ]
/////////


//Llamamos a los

const axios=require("axios")
axios.defaults.baseURL="http://localhost:3000/api"

const seeder=axios.create({
    baseURL:"http://localhost:3000/api"
})

//Llamamos a los modelos
const {Curso,Docente,Alumno}=require("../models/index")

//Construimos 3 arrays con información para hacer un seed a la DB
const alumnosData=[
    {
      "edad": 20,
      "nombre": "Justice",
      "apellido": " Barnett"
    },
    {
      "edad": 23,
      "nombre": "Arline",
      "apellido": " Rush"
    },
    {
      "edad": 27,
      "nombre": "Rosanne",
      "apellido": " Willis"
    },
    {
      "edad": 27,
      "nombre": "Elba",
      "apellido": " Hebert"
    },
    {
      "edad": 35,
      "nombre": "Snyder",
      "apellido": " Jefferson"
    },
    {
      "edad": 23,
      "nombre": "Laverne",
      "apellido": " Miles"
    },
    {
      "edad": 33,
      "nombre": "Walsh",
      "apellido": " Langley"
    },
    {
      "edad": 35,
      "nombre": "Kristi",
      "apellido": " Key"
    },
    {
      "edad": 29,
      "nombre": "Allyson",
      "apellido": " Bishop"
    },
    {
      "edad": 37,
      "nombre": "Krystal",
      "apellido": " Leblanc"
    },
    {
      "edad": 26,
      "nombre": "Raquel",
      "apellido": " Drake"
    },
    {
      "edad": 40,
      "nombre": "Harding",
      "apellido": " Daugherty"
    },
    {
      "edad": 30,
      "nombre": "Bowman",
      "apellido": " Lowery"
    },
    {
      "edad": 21,
      "nombre": "Britney",
      "apellido": " Ayala"
    },
    {
      "edad": 23,
      "nombre": "Lauri",
      "apellido": " Harrell"
    },
    {
      "edad": 40,
      "nombre": "Geraldine",
      "apellido": " Avery"
    },
    {
      "edad": 26,
      "nombre": "Lynn",
      "apellido": " Mckinney"
    },
    {
      "edad": 28,
      "nombre": "Hinton",
      "apellido": " Chan"
    },
    {
      "edad": 23,
      "nombre": "Lowe",
      "apellido": " Frazier"
    },
    {
      "edad": 32,
      "nombre": "Ramos",
      "apellido": " Mccarthy"
    },
    {
      "edad": 35,
      "nombre": "Kirsten",
      "apellido": " Weber"
    },
    {
      "edad": 20,
      "nombre": "Suzanne",
      "apellido": " Roth"
    },
    {
      "edad": 35,
      "nombre": "Moody",
      "apellido": " Hammond"
    },
    {
      "edad": 28,
      "nombre": "Patrica",
      "apellido": " Hinton"
    },
    {
      "edad": 32,
      "nombre": "Marjorie",
      "apellido": " Adams"
    },
    {
      "edad": 30,
      "nombre": "Pacheco",
      "apellido": " Nolan"
    },
    {
      "edad": 27,
      "nombre": "Stella",
      "apellido": " Justice"
    },
    {
      "edad": 40,
      "nombre": "Sherry",
      "apellido": " Todd"
    },
    {
      "edad": 23,
      "nombre": "Ellison",
      "apellido": " Holcomb"
    },
    {
      "edad": 37,
      "nombre": "Woods",
      "apellido": " Houston"
    },
    {
      "edad": 22,
      "nombre": "Barr",
      "apellido": " Booth"
    },
    {
      "edad": 23,
      "nombre": "Lillie",
      "apellido": " Head"
    },
    {
      "edad": 25,
      "nombre": "Christian",
      "apellido": " Poole"
    },
    {
      "edad": 23,
      "nombre": "Alice",
      "apellido": " Howe"
    },
    {
      "edad": 32,
      "nombre": "Valeria",
      "apellido": " Calderon"
    },
    {
      "edad": 38,
      "nombre": "Dejesus",
      "apellido": " Tanner"
    },
    {
      "edad": 31,
      "nombre": "Blackburn",
      "apellido": " Robbins"
    },
    {
      "edad": 33,
      "nombre": "Augusta",
      "apellido": " Benson"
    },
    {
      "edad": 35,
      "nombre": "Briana",
      "apellido": " Mcfadden"
    },
    {
      "edad": 35,
      "nombre": "Kayla",
      "apellido": " Whitfield"
    },
    {
      "edad": 39,
      "nombre": "Cindy",
      "apellido": " Maldonado"
    },
    {
      "edad": 38,
      "nombre": "Anderson",
      "apellido": " Newton"
    },
    {
      "edad": 37,
      "nombre": "Beverly",
      "apellido": " Watkins"
    },
    {
      "edad": 33,
      "nombre": "Simmons",
      "apellido": " Mayo"
    },
    {
      "edad": 31,
      "nombre": "Ursula",
      "apellido": " Ellis"
    },
    {
      "edad": 20,
      "nombre": "Melton",
      "apellido": " Peterson"
    },
    {
      "edad": 35,
      "nombre": "Tracie",
      "apellido": " Dickson"
    },
    {
      "edad": 37,
      "nombre": "Graham",
      "apellido": " Albert"
    },
    {
      "edad": 38,
      "nombre": "Charlotte",
      "apellido": " Conley"
    },
    {
      "edad": 40,
      "nombre": "Daugherty",
      "apellido": " Short"
    },
    {
      "edad": 25,
      "nombre": "Tisha",
      "apellido": " Schneider"
    },
    {
      "edad": 24,
      "nombre": "Jerry",
      "apellido": " Fleming"
    },
    {
      "edad": 21,
      "nombre": "Loraine",
      "apellido": " Calhoun"
    },
    {
      "edad": 34,
      "nombre": "Cecilia",
      "apellido": " Boone"
    },
    {
      "edad": 39,
      "nombre": "Lucille",
      "apellido": " Rodgers"
    },
    {
      "edad": 23,
      "nombre": "Cheri",
      "apellido": " Waters"
    },
    {
      "edad": 25,
      "nombre": "Ollie",
      "apellido": " Hays"
    },
    {
      "edad": 35,
      "nombre": "Kay",
      "apellido": " Gentry"
    },
    {
      "edad": 32,
      "nombre": "Bray",
      "apellido": " Guzman"
    },
    {
      "edad": 34,
      "nombre": "Essie",
      "apellido": " Lane"
    },
    {
      "edad": 24,
      "nombre": "Skinner",
      "apellido": " Wong"
    },
    {
      "edad": 34,
      "nombre": "Jessie",
      "apellido": " Chase"
    },
    {
      "edad": 30,
      "nombre": "Mclaughlin",
      "apellido": " George"
    },
    {
      "edad": 35,
      "nombre": "Maxwell",
      "apellido": " Nixon"
    },
    {
      "edad": 34,
      "nombre": "Estella",
      "apellido": " Jordan"
    },
    {
      "edad": 32,
      "nombre": "Duncan",
      "apellido": " Bates"
    },
    {
      "edad": 26,
      "nombre": "Zelma",
      "apellido": " Anderson"
    },
    {
      "edad": 29,
      "nombre": "Maryanne",
      "apellido": " Steele"
    },
    {
      "edad": 32,
      "nombre": "Wanda",
      "apellido": " Sargent"
    },
    {
      "edad": 28,
      "nombre": "Genevieve",
      "apellido": " Hale"
    },
    {
      "edad": 24,
      "nombre": "Merrill",
      "apellido": " Landry"
    },
    {
      "edad": 29,
      "nombre": "Ernestine",
      "apellido": " Gibbs"
    },
    {
      "edad": 23,
      "nombre": "Peck",
      "apellido": " Kidd"
    },
    {
      "edad": 20,
      "nombre": "Hays",
      "apellido": " Baxter"
    },
    {
      "edad": 37,
      "nombre": "Cheryl",
      "apellido": " Dean"
    },
    {
      "edad": 30,
      "nombre": "Puckett",
      "apellido": " Pate"
    },
    {
      "edad": 31,
      "nombre": "Wise",
      "apellido": " Baker"
    },
    {
      "edad": 29,
      "nombre": "Tammie",
      "apellido": " Leonard"
    },
    {
      "edad": 36,
      "nombre": "Fischer",
      "apellido": " Carver"
    },
    {
      "edad": 40,
      "nombre": "Lynda",
      "apellido": " Yang"
    },
    {
      "edad": 24,
      "nombre": "Jane",
      "apellido": " Gordon"
    },
    {
      "edad": 24,
      "nombre": "Barbra",
      "apellido": " Patterson"
    },
    {
      "edad": 23,
      "nombre": "Hallie",
      "apellido": " Horn"
    },
    {
      "edad": 28,
      "nombre": "Fitzgerald",
      "apellido": " Britt"
    },
    {
      "edad": 29,
      "nombre": "Tucker",
      "apellido": " Park"
    },
    {
      "edad": 22,
      "nombre": "Hines",
      "apellido": " Galloway"
    },
    {
      "edad": 25,
      "nombre": "Wilder",
      "apellido": " Garrison"
    },
    {
      "edad": 33,
      "nombre": "Alana",
      "apellido": " Lamb"
    },
    {
      "edad": 31,
      "nombre": "Harriet",
      "apellido": " Wyatt"
    },
    {
      "edad": 31,
      "nombre": "Robinson",
      "apellido": " Mcguire"
    },
    {
      "edad": 27,
      "nombre": "Madge",
      "apellido": " Winters"
    },
    {
      "edad": 20,
      "nombre": "Catherine",
      "apellido": " Allison"
    },
    {
      "edad": 26,
      "nombre": "Francis",
      "apellido": " Hurst"
    },
    {
      "edad": 29,
      "nombre": "Mcmillan",
      "apellido": " Oneal"
    },
    {
      "edad": 23,
      "nombre": "Knapp",
      "apellido": " Mercer"
    },
    {
      "edad": 26,
      "nombre": "Charles",
      "apellido": " Ray"
    },
    {
      "edad": 37,
      "nombre": "Carrie",
      "apellido": " Arnold"
    },
    {
      "edad": 23,
      "nombre": "Marie",
      "apellido": " Massey"
    },
    {
      "edad": 32,
      "nombre": "Bender",
      "apellido": " Morris"
    },
    {
      "edad": 40,
      "nombre": "Poole",
      "apellido": " Cunningham"
    }
  ]
const docentesData=[
    {
      "profesion": "Salesman",
      "nombre": "Washington",
      "apellido": " Collier"
    },
    {
      "profesion": "Journalist",
      "nombre": "Leona",
      "apellido": " Williamson"
    },
    {
      "profesion": "Jeweller",
      "nombre": "Aimee",
      "apellido": " Joseph"
    },
    {
      "profesion": "Salesman",
      "nombre": "Saunders",
      "apellido": " Willis"
    },
    {
      "profesion": "Historian",
      "nombre": "Minnie",
      "apellido": " Savage"
    },
    {
      "profesion": "Electrician",
      "nombre": "Maritza",
      "apellido": " Mcfadden"
    },
    {
      "profesion": "Producer",
      "nombre": "Harvey",
      "apellido": " Hammond"
    },
    {
      "profesion": "Producer",
      "nombre": "Heidi",
      "apellido": " Keith"
    },
    {
      "profesion": "Journalist",
      "nombre": "Bobbi",
      "apellido": " Haney"
    },
    {
      "profesion": "Salesman",
      "nombre": "Lawanda",
      "apellido": " Campos"
    }
  ]
const materiasData=[
    {
      "materia": "Ed. Física"
    },
    {
      "materia": "Programación"
    },
    {
      "materia": "Programación"
    },
    {
      "materia": "Recreo"
    },
    {
      "materia": "Literatura"
    },
    {
      "materia": "Recreo"
    },
    {
      "materia": "Química"
    },
    {
      "materia": "Música"
    },
    {
      "materia": "Historia"
    },
    {
      "materia": "Historia"
    }
  ]

//Esta función inserta la información en la DB
const cargar= async()=>{
  const alumnosIngresados=await Alumno.bulkCreate(alumnosData)
  const docentesIngresados=await Docente.bulkCreate(docentesData)
  const materiasIngresadas=await Curso.bulkCreate(materiasData)
}
//Ejecutamos la función
cargar()

//Ahora vamos a vincular los alumnos con los cursos y los docentes con los cursos

// const idAlumnos=[46,75,20,59,33,2,36,91,45,13,55,10,98,5,37,7,42,93,88,23,94,96,82,86,74,43,65,78,8,67,47,51,50,97,19,27,89,73,44,84,9,92,35,32,12,17,76,38,54,71,6,64,49,40,70,85,100,11,68,28,48,99,81,4,24,57,56,77,87,80,15,52,83,26,22,39,62,79,18,31,61,53,25,69,95,3,60,21,14,1,41,29,66,72,90,30,58,63,34,16]
// const idCursos=[4,1,6,2,5,9,10,3,7,8]
// const idDocentes=[6,1,3,8,9,4,2,7,10,5]

// const vincularAlumnoCurso=(idAlumno,idCurso,vuelta)=>{
//   for(let i=vuelta;i<vuelta+10;i++){
//     seeder.put(`http://localhost:3000/api/alumnos/vincular/${idAlumno}/${idCurso}`)
//   }
// }


