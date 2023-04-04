const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

/* Bodyparser Middleware */
app.use(express.json());

/* Load env */
dotenv.config({ path: './.env'});

/* Log route actions */
if(process.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
}

/* routes */
app.use('/leads', require('./routes/lead'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))