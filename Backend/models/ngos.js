const mongoose = require('mongoose')
const { Schema } = mongoose;

const NgoSchema = new Schema({
    
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
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ngo",NgoSchema);