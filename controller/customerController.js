    const Customer = require('./../models/customerSchema');
    const APIFeatures = require('./../dataBaseManager/loanDbContext');

    // get all customers
    exports.getAllCustomers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Customer.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        const customers = await features.query;

        // SEND RESPONSE
        res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
            customers
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // get a single customer by ID
    exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        res.status(200).json({
        status: 'success',
        data: {
            customer
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // create a new customer
    exports.createCustomer = async  (req, res) => {
    try {

        const newCustomer = await Customer.create(req.body);
        // auto-populate date
        newCustomer.created = new Date();
        newCustomer.modified = new Date();

        res.status(201).json({
        status: 'success',
        data: {
            customer: newCustomer
        }
        });
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: err
        });
    }
    };

    // change an existing customer by ID
    exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
        });

        res.status(200).json({
        status: 'success',
        data: {
            customer
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
    };

    // delete a customer by ID
    exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);

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