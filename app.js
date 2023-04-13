const express = require("express")
const app= express()
const router=require("./routes")
const models=require("./models/index")
const db=require("./db")


app.use(express.json())

app.use("/api",router)

app.use("/",(req,res)=>{res.send("BLABLABLA")})

db.sync({})
.then(()=>app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000")))
.catch((err)=>console.log(err))