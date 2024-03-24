const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    goal: {
        type: [String],
        required: true,
    },
    actions: {
        type: [{
            heading: String,
            description: String
        }],
        default: [] 
    },
    collaborators: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    registeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Events', eventSchema);
