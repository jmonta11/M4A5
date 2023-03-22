    const Payment = require('./../models/ledgerSchema');
    const APIFeatures = require('./../dataBaseManager/loanDbContext');

    exports.getAllPayments = async (req, res) => {
    try {
        // execute
        const features = new APIFeatures(Payment.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        const payments = await features.query;

        // response sent
        res.status(200).json({
        status: 'success',
        results: payments.length,
        data: {
            payments
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // single payment by ledger ID
    exports.getPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);

        res.status(200).json({
        status: 'success',
        data: {
            payment
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // new payment
    exports.createPayment = async  (req, res) => {
    try {

        const newPayment = await Payment.create(req.body);
        newPayment.created = new Date();
        newPayment.modified = new Date();

        res.status(201).json({
        status: 'success',
        data: {
            payment: newPayment
        }
        });
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: err
        });
    }
    };

    // update existing payment
    exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
        });

        res.status(200).json({
        status: 'success',
        data: {
            payment
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
    exports.deletePayment = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);

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