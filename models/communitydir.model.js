const mongoose=require("mongoose")
const commDirSchema=new mongoose.Schema({
    title:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    service:{
        type:String
    },
    imageurl:{
        type:String
    }
  
  },{timestamps:true,versionKey:false});
  
 
  module.exports = mongoose.model('communityDir', commDirSchema);