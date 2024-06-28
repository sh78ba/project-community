const mongoose=require("mongoose")
const neighbourSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    imageurl:{
        type:String
    }
  
  },{timestamps:true,versionKey:false});
  
 
  module.exports = mongoose.model('neighbour', neighbourSchema);