const user = require('../model/user')
const product = require('../model/product')
const order = require('../model/order')
const mongoose = require('mongoose')


const readOrder = async(req,res)=>{
	const orderFind = await order.find().populate('user').populate('products.product');
	for(orders of orderFind){
		console.log(orders)
	}
	res.render('home',{order:orderFind});
} 

const homePage = async(req,res)=>{
	readOrder(req,res);
}

const addOrder = async(req,res)=>{
	const {id, productId, quantity} = req.body;
	const userFind = await user.findById({_id:id})

	if(userFind){
		const orderSave = new order({
			user:id,
			products:{product:productId, quantity}
		})		
		await orderSave.save();
		console.log('order saved')
		readOrder(req,res)
	}
	else{
		console.log('User Not found')
		readOrder(req,res)
	}
	
}

module.exports = {
	homePage,
	addOrder,
	readOrder,
}
