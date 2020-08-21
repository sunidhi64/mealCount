const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    breakfastVeg:{ type: String, required: true },
    breakfastNonVeg:{ type: String, required: true },
    lunchVeg:{ type: String, required: true },
    lunchNonVeg:{ type: String, required: true },
    snacksVeg:{ type: String, required: true },
    snacksNonVeg:{ type: String, required: true },
    dinnerVeg:{ type: String, required: true },
    dinnerNonVeg:{ type: String, required: true },
})
module.exports = menu = mongoose.model('menu', menuSchema);
    
