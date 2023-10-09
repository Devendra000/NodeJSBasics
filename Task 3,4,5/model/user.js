
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required:true
	},
	address:{
		type: String,
		required:true,
	},
	order:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'order'
	}]
},
{timestamps: true});
module.exports = mongoose.model('user', userSchema);