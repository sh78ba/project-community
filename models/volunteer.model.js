const mongoose = require('mongoose');
const volunteerOpportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

},{timestamps:true,versionKey:false});

module.exports = mongoose.model('VolunteerOpportunity', volunteerOpportunitySchema);
