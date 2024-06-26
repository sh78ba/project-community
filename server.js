const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const db_config=require("./configs/db.config")
const server_config=require("./configs/server.config")


//fors cors
app.use(cors());
//for getting object in JSON format
app.use(express.json())


//for database conection
mongoose.connect(db_config.DB_URL)

const db=mongoose.connection

db.on("error",()=>{
    console.log("Error while connecting to Database")
})

db.once("open",()=>{
    console.log("Successfull connecting the database")
})

//stitch 

app.listen(server_config.PORT,()=>{
    console.log("Server started at port",server_config.PORT)
})



