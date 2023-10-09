
const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
	id:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
	products:[
		products:{mongoose.Schema.Types.ObjectId, ref:'product'},
		quantity:{type:Number, default:1},
		price:{mongoose.Schema.Types.ObjectId, ref:'product'}
		],
	totalPrice:{type:Number, required:true}
},
{timestamps: true});
module.exports = mongoose.model('cart', cartSchema);