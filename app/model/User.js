const mongoose = require('mongoose');

// fields definition
const fields = {
    name : {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
}


// wrap fields with mongoose schema

const schema = mongoose.Schema(fields, {timestamps: true})


// wrap schema with mongoose model

const model = mongoose.model('User', schema);

module.exports = model;