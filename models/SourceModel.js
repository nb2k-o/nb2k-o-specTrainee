const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE
const contSchema = new Schema({
    id: {type: Number, required: true},
    sml:{type: String, required: false},
    name: {type: String, required: true},
    email: {type: String, required: true},
    
}) 

const sources = mongoose.model('spec_sources', contSchema);

module.exports = sources;