const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName  : { type: String, required: true },
    lastName   : { type: String, required: true },
    password   : { type: String, required: true },
    messAuth   : { type: mongoose.Schema.Types.ObjectId, ref: 'messauth' },
    choice     : { type: Boolean },
    choiceType : { type: String  },
    meal: [{type: Schema.Types.ObjectId, ref: 'menu' }]
});

// url for student
studentSchema.virtual('url').get(function() {
    return '/studentinfo/' + this._id;
});

const student = mongoose.model('student', studentSchema);
module.exports = student;


