const mongoose = require('mongoose');

const Schema = mongoose.Schems;

const studentSchema = new Schema({
    firstName  : { type: String, required: true },
    lastName   : { type: String },
    email      : { type: String, required: true, unique: true },
    rollNo     : { type: String, required: true },
    phoneNo    : { type: Number, required: true },
    choice     : { type: Boolean },
    choiceType : { type:String  },
});

// url for student
studentSchema.virtual('url').get(function() {
    return '/studentinfo/' + this._id;
});

module.exports = mongoose.model('student', studentSchema);


