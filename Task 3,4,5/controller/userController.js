const user = require('../model/user')
const product = require('../model/product')
const order = require('../model/order')
const mongoose = require('mongoose')

const home = async(req,res)=>{
	const userFind =  await user.find();
	res.render('home',{user:userFind});
}

exports.readUser = async(req,res)=>{
	home(req,res);
}

exports.homePage = async(req,res)=>{
	home(req,res);
}

//add user(unique name)
exports.addUser = async(req,res)=>{
	const {name, address} = req.body;
	const existUser = await user.findOne({name:name});
	if(existUser){
		console.log('User already exists');
		home(req,res);
	}
	else{
		const userAdd = await new user({name, address});
		userAdd.save()
		if(userAdd){
			console.log('user added');
			home(req,res);
		} 
		else{
			console.log('user couldnt be added')
			home(req,res);
		}
	}
	
} 

//update user name and address
exports.updateUser = async(req,res)=>{
	const {id, name, address} = req.body;
	const userUpdate = await user.findByIdAndUpdate({_id:id},{$set:{name : name, address : address}})
	if(userUpdate){
		console.log('user updated');
		home(req,res);
	} 
	else{
		console.log('user couldnt be updated')
		home(req,res);
	}
} 

//delete user by id
exports.deleteUser = async(req,res)=>{
	const id = req.body.id;
	
	const userDelete = await user.findByIdAndDelete({_id:id})
	if(userDelete){
		console.log('user deleted');
		home(req,res);
	} 
	else{
		console.log('User couldnt be deleted')
		home(req,res);
	}
}


