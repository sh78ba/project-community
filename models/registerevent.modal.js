const mongoose = require('mongoose');
const registereventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  imageurl:{type:String},
  date:{type:Date},
  name:{type:String},
  phone:{type:String},
  email:{type:String}
 
},{timestamps:true,versionKey:false});
module.exports = mongoose.model('registeredEvent', registereventSchema);
