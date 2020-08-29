const mongoose = require("mongoose");

const Student_registrationSchema = new mongoose.Schema({
    Name: { type: String, required: true, unique: true },
    College Registration No.: { type: String, required: true },
    Hostel_Room_No:{ type: Number, required: true, default: 0 },
    password: { type: String, required: true, minlength: 8 },
    
});

module.exports = Student_registration = mongoose.model("Student_registration", Student_registrationSchema);