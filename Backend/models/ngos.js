const mongoose = require('mongoose')
const { Schema } = mongoose;

const NgoSchema = new Schema({
    ngo_name: {
        type: String,
        require: true
    }, 
    ngo_desc: {
        type: String,
    },
    ngo_location: {
        type: String
    },
    goal: {
        type: [{
            type: String
        }]
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
    published: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'publishedBooks'
        }]
    },
    verified: {
        type: Boolean,
        require: true
    },
    Declaration: {
        type: Boolean,
        require: true
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ngo",NgoSchema);