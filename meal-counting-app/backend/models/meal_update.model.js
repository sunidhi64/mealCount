const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menu_updateSchema = new Schema({
    breakfastVegMon:{ type: String  },
    breakfastVegTue:{ type: String },
    breakfastVegWed:{ type: String  },
    breakfastVegThur:{ type: String  },
    breakfastVegFri:{ type: String },
    breakfastVegSat:{ type: String  },
    breakfastVegSun:{ type: String  },
    breakfastNonVegMon:{ type: String },
    breakfastNonVegTue:{ type: String },
    breakfastNonVegWed:{ type: String  },
    breakfastNonVegThur:{ type: String  },
    breakfastNonVegFri:{ type: String },
    breakfastNonVegSat:{ type: String },
    breakfastNonVegSun:{ type: String },
    lunchVegMon:{ type: String },
    lunchVegTue:{ type: String },
    lunchVegWed:{ type: String },
    lunchVegThu:{ type: String },
    lunchVegFri:{ type: String },
    lunchVegSat:{ type: String  },
    lunchVegSun:{ type: String  },
    lunchNonVegMon:{ type: String },
    lunchNonVegTue:{ type: String },
    lunchNonVegWed:{ type: String },
    lunchNonVegThu:{ type: String },
    lunchNonVegFri:{ type: String },
    lunchNonVegSat:{ type: String },
    lunchNonVegSun:{ type: String },
    snacksVegMon:{ type: String  },
    snacksVegTue:{ type: String },
    snacksVegWed:{ type: String  },
    snacksVegThu:{ type: String },
    snacksVegFri:{ type: String },
    snacksVegSat:{ type: String },
    snacksVegSun:{ type: String },
    snacksNonVegMon:{ type: String },
    snacksNonVegTue:{ type: String },
    snacksNonVegWed:{ type: String },
    snacksNonVegThu:{ type: String },
    snacksNonVegFri:{ type: String },
    snacksNonVegSat:{ type: String},
    snacksNonVegSun:{ type: String},
    dinnerVegMon:{ type: String},
    dinnerVegTue:{ type: String },
    dinnerVegWed:{ type: String},
    dinnerVegThu:{ type: String },
    dinnerVegFri:{ type: String},
    dinnerVegSat:{ type: String},
    dinnerVegSun:{ type: String },
    dinnerNonVegMon:{ type: String},
    dinnerNonVegTue:{ type: String},
    dinnerNonVegWed:{ type: String},
    dinnerNonVegThu:{ type: String},
    dinnerNonVegFri:{ type: String},
    dinnerNonVegSat:{ type: String},
    dinnerNonVegSun:{ type: String },
})
module.exports = menu_update = mongoose.model('menu_update', menu_updateSchema);
    
