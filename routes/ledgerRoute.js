    const express = require('express');
    const router = express.Router();
    const ledgerController = require('../controllers/ledgerController');

    router
    .route('/')
    .get(ledgerController.getAllPayments)
    .post(ledgerController.createPayment);

    router
    .route('/:id')
    .get(ledgerController.getPayment)
    .patch(ledgerController.updatePayment)
    .delete(ledgerController.deletePayment);

    module.exports = router;
