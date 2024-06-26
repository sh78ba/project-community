const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},{timestamps:true,versionKey:false});
module.exports = mongoose.model('News', newsSchema);
