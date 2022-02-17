const mongoose = require('mongoose');

// fields definition
const fields = {
    title : {
        type : String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}


// wrap fields with mongoose schema

const schema = mongoose.Schema(fields, {timestamps: true})


// wrap schema with mongoose model

const model = mongoose.model('Post', schema);

module.exports = model;