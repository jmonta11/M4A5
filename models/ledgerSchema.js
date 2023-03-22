const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
    paymentAmount: Number,
    principal: Number,
    interest: Number,
    customerID: Number,
    loanNumber: Number,
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

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;