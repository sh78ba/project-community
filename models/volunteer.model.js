//get event id 

//get user mail


const mongoose = require('mongoose');
const volunteerOpportunitySchema = new mongoose.Schema({
  eventid:{type:String,required:true},
  usermail:{type:String,required:true}

},{timestamps:true,versionKey:false});

module.exports = mongoose.model('VolunteerOpportunity', volunteerOpportunitySchema);
