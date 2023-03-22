  const express = require('express');
  const morgan = require('morgan');

  const customerRouter = require('./routes/customerRoutes');
  const loanRouter = require('./routes/loanRoutes');
  const ledgerRouter = require('./routes/ledgerRoutes');

  const app = express();

  const bodyParser = require('body-parser');
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(express.json());
  app.use(express.static(`${__dirname}/public`));

  app.use('/', (req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

  app.use('/', (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

  
  app.use('/customers', customerRouter);
  app.use('/loans', loanRouter);
  app.use('/payments', ledgerRouter);

  module.exports = app;