    const dotenv = require('dotenv');
    dotenv.config({ path: './config.env' });

    const app = require('./app');

    const mongoose = require('mongoose');
    const MONGO_DATABASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);
    mongoose.connect(MONGO_DATABASE,
    {
        useNewUrlParser: true,
    }).then(con => {
        console.log(con.connection); 
        console.log(`The database conenction was successful with ${process.env.DATABASE}`);
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    });