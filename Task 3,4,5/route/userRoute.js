const {homePage, readUser, addUser, updateUser, deleteUser, updateOrder} = require('../controller/userController');


const path = require('path')
const view = path.join(__dirname,'../views/user');

const ejs = require('ejs')
const bodyParser = require('body-parser');

const express = require('express');
const userRoute = express();

userRoute.set('view engine', 'ejs')
userRoute.set('views', view)

userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({extended:true}));

userRoute.get('/', homePage);

//CRUD operations for user

//add user
userRoute.get('/add', readUser);
userRoute.post('/add', addUser);

//read user
userRoute.get ('/read', readUser);

//update user
userRoute.get('/update', readUser);
userRoute.post('/update', updateUser);

//delete user
userRoute.get('/delete', readUser);
userRoute.post('/delete', deleteUser);

module.exports = userRoute;