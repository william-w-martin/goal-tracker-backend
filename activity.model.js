const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Activity = new Schema({
    act_action: {
        type: String
    },
    act_quantity: {
        type: String
    },
    act_quant_uom: {
        type: String
    },
    act_datetime: {
        type: Date
    }
});

module.exports = mongoose.model('Activity', Activity);