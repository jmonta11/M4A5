const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanType: String,
    loanNumber: Number,
    amount: Number,
    interest: Number,
    loanTermYears: Number,
    startDate: Date,
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

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;