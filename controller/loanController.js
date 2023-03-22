    const Loan = require('./../models/loanSchema');
    const APIFeatures = require('./../dataBaseManager/loanDbContext');

    //all loans
    exports.getAllLoans = async (req, res) => {
    try {
        //execute
        const features = new APIFeatures(Loan.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        const loans = await features.query;

        // response
        res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    //loan by ID
    exports.getLoan = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);

        res.status(200).json({
        status: 'success',
        data: {
            loan
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    //new loan
    exports.createLoan = async  (req, res) => {
    try {

        const newLoan = await Loan.create(req.body);
        newLoan.created = new Date();
        newLoan.modified = new Date();

        res.status(201).json({
        status: 'success',
        data: {
            loan: newLoan
        }
        });
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: err
        });
    }
    };

    // update existing loan ID
    exports.updateLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
        });

        res.status(200).json({
        status: 'success',
        data: {
            loan
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // delete 
    exports.deleteLoan = async (req, res) => {
    try {
        await Loan.findByIdAndDelete(req.params.id);

        res.status(204).json({
        status: 'success',
        data: null
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };