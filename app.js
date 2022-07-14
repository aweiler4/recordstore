const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Middleware

app.use('/', (req, res, next) => {
    res.send('This is starting our App')
})


mongoose
    .connect('mongodb+srv://aweiler:WbOkdu7aQaXXXnXo@cluster0.scdnozj.mongodb.net/Record-Store?retryWrites=true&w=majority'
)
    .then(() => console.log('Connected to Database'))
    .then(() => {
        app.listen(5000);
    }) 
    .catch((error) => console.log(err));

//WbOkdu7aQaXXXnXo