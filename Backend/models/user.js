const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
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
    dob: {
        type: Date
    },
    qualification:{
        type: String
    },
    address: {
        type: String
    },
    job: {
        type: String
    },
    role: {
        type: String
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User",UserSchema);