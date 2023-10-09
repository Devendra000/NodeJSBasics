const orderController = require('../controller/orderController');


const path = require('path')
const view = path.join(__dirname,'../views/order');

const ejs = require('ejs')
const bodyParser = require('body-parser');

const express = require('express');
const orderRoute = express();

orderRoute.set('view engine', 'ejs')
orderRoute.set('views', view)

orderRoute.use(bodyParser.json());
orderRoute.use(bodyParser.urlencoded({extended:true}));

orderRoute.get('/', orderController.homePage);

//CRUD operations for Order

//add Order
orderRoute.get('/add', orderController.readOrder);
orderRoute.post('/add', orderController.addOrder);


module.exports = orderRoute;