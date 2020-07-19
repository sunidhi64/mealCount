const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messAuthSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    password: {type: String},
    students: [{type: Schema.Types.ObjectId, ref: 'student' }]
});


const messauth =  mongoose.model('messauth', messAuthSchema);
module.exports = messauth;
  
