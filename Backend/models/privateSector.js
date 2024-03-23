const mongoose = require('mongoose')
const { Schema } = mongoose;

const privateSector = new Schema({
    ps_name: {
        type: String,
        require: true
    }, 
    ps_location: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String
    },
    organizationalSize: {
        type: Number
    },
    verified: {
        type: Boolean,
        require: true
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PS",privateSector);