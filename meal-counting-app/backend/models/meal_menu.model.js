const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    Breakfast:{ type: String, required: true },
    lunch:{ type: String, required: true },
    snacks:{ type: String, required: true },
    dinner:{ type: String, required: true },
})
module.exports = menu = mongoose.model('menu', menuSchema);
    
