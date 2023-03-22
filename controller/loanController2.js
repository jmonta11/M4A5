    const Loan = require('../models/loanSchema');

    exports.getAllLoans = async (req, res) => {
    // database data
    const loans = await Loan.find();
    res.status(200).json ({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
    };

    exports.getLoanById = async (req, res) => {
    // database data by ID
    const {id} = req.params;
    const loan = await Loan.find({_id: id});
    res.status(200).json ({
        status: 'success',
        data: {
            loan
        }
    });
    };

    exports.createLoan = async (req, res) => {
    const newLoan = req.body;
    newLoan.createdDate = new Date();
    newLoan.insertedDate = new Date();
    const loan = await Loan.create(newLoan);
    res.status(201).json({
        status: 'success',
        data: loan
    });
    };

    exports.updateLoanById = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
    };

    exports.deleteLoanById = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
    };