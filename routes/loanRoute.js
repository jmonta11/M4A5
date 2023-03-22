    const express = require('express');
    const router = express.Router();
    const loanController = require('../controllers/loanController');

    router
    .route('/')
    .get(loanController.getAllLoans)
    .post(loanController.createLoan);

    router
    .route('/:id')
    .get(loanController.getLoan)
    .patch(loanController.updateLoan)
    .delete(loanController.deleteLoan);

    module.exports = router;