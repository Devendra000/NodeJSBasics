const productController = require('../controller/productController');


const path = require('path')
const view = path.join(__dirname,'../views/product');

const ejs = require('ejs')
const bodyParser = require('body-parser');

const express = require('express');
const productRoute = express();

productRoute.set('view engine', 'ejs')
productRoute.set('views', view)

productRoute.use(bodyParser.json());
productRoute.use(bodyParser.urlencoded({extended:true}));

productRoute.get('/', productController.homePage);

//CRUD operations for product

//add product
productRoute.post('/add', productController.addProduct);
productRoute.get ('/add', productController.readProduct);

//read product
productRoute.get ('/read', productController.readProduct);

//update product
productRoute.post('/update', productController.updateProduct);
productRoute.get ('/update', productController.readProduct);

//delete product
productRoute.post('/delete', productController.deleteProduct);
productRoute.get ('/delete', productController.readProduct);


//sort products by price
productRoute.get('/sort', productController.sort);

//search products
productRoute.get('/search', productController.readProduct)
productRoute.post('/search', productController.search)

//out of stock products
productRoute.get('/stockOut', productController.stockOut)

module.exports = productRoute;