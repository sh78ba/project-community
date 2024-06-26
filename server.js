const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
require('dotenv').config()



//fors cors
app.use(cors());
//for getting object in JSON format
app.use(express.json())


//for database conection
mongoose.connect(process.env.DB_URL)

const db=mongoose.connection

db.on("error",()=>{
    console.log("Error while connecting to Database")
})

db.once("open",()=>{
    console.log("Successfull connecting the database")
})

//stitch 
require("./routes/auth.route")(app)
require("./routes/event.route")(app)

app.listen(process.env.PORT,()=>{
    console.log("Server started at port",process.env.PORT)
})



