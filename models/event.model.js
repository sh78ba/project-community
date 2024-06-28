const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle:{type:String,required:true},
  description: { type: String, required: true },
  location: { type: String, required: true },
  hostname: { type: String, required: true },
  hostemail:{type:String,required:true},
  imageurl:{type:String},
  fromdate:{type:Date},
  todate:{type: Date}
 
},{timestamps:true,versionKey:false});
module.exports = mongoose.model('Event', eventSchema);
