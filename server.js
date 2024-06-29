const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
require('dotenv').config()
const fileUpload=require("express-fileupload")



//fors cors
app.use(cors());
//for getting object in JSON format
app.use(express.json())

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir : '/tmp/',

}))

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
require("./routes/neighbour.route")(app)
require("./routes/commdir.route")(app)
require("./routes/post.route")(app)

app.listen(process.env.PORT,()=>{
    console.log("Server started at port",process.env.PORT)
})



