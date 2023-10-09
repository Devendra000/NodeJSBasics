const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
   console.log(`Server runs at port ${port}`);
});

const ejs = require('ejs');
app.set('view engine','ejs');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const db = 'mongodb://127.0.0.1:27017/NodejsBasics';

mongoose.connect(db).then(()=>{
    console.log('Database connected')
}).catch((e)=>{
    console.log(`Error connecting! ${e}`)
});

//Server homepage be of userRoute
const userRoute = require('./route/userRoute')
app.use('/', userRoute);

//products
const productRoute = require('./route/productRoute')
app.use('/product', productRoute)

//orders
const orderRoute = require('./route/orderRoute')
app.use('/order', orderRoute)
