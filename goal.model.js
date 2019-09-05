const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Goal = new Schema({
    goal_activity: {
        type: String
    },
    goal_quantity: {
        type: String
    },
    goal_quant_uom: {
        type: String
    },
    goal_frequency: {
        type: Number
    },
    goal_freq_period: {
        type: String
    },
    goal_freq_uom: {
        type: String
    },
    goal_minmax: {
        type: String
    }
});

module.exports = mongoose.model('Goal', Goal);