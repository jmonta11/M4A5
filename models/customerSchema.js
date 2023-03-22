const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    firstName: String,
    middleName: String,
    lastName: String,
    birthdate: Date,
    gender: String,
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
    isDeleted: Boolean
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;