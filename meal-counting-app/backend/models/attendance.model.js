const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    Breakfast:{ 
        Yes: {type: Boolean, required: true, default: false}
        No:{type: Boolean, required: true, default: false}
        Veg:{type: Boolean, required: true, default: false}
        NonVeg:{type: Boolean, required: true, default: false}
        },
    lunch:{
        Yes: {type: Boolean, required: true, default: false}
        No:{type: Boolean, required: true, default: false}
        Veg:{type: Boolean, required: true, default: false}
        NonVeg:{type: Boolean, required: true, default: false}
        },

    snacks:{ Yes: {type: Boolean, required: true, default: false}
    No:{type: Boolean, required: true, default: false}
    Veg:{type: Boolean, required: true, default: false}
    NonVeg:{type: Boolean, required: true, default: false}
         },
    dinner:{ type: String, required: true },
})
module.exports = attendance = mongoose.model('attendance', attendanceSchema);
