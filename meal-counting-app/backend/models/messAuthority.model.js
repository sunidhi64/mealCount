const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messAuthSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    password: {type: String},
    students: [{type: Schema.Types.ObjectId, ref: 'student' }]
});


const messauth =  mongoose.model('messauth', messAuthSchema);
module.exports = messauth;
  
