    const express = require('express');
    const router = express.Router();
    const customerController = require('../controllers/customerController');

    router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createCustomer);

    router
    .route('/:id')
    .get(customerController.getCustomer)
    .patch(customerController.updateCustomer)
    .delete(customerController.deleteCustomer);

    module.exports = router;