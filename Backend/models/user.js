const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    ngo_name: {
        type: String,
        require: true
    }, 
    ngo_location: {
        type: String
    },
    goal: {
        type: [{
            type: String
        }]
    },
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
    published: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'publishedBooks'
        }],
        required: true,
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User",UserSchema);