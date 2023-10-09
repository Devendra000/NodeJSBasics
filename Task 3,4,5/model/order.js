
const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
	
	user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},

	products:[{
			product: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
			quantity: {type:Number},
			}],

	totalPrice: { type: Number } 
},
{timestamps: true});
module.exports = mongoose.model('order', orderSchema);