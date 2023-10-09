const product = require('../model/product')


const readProduct = async(req,res)=>{
	const productFind = await product.find();
	res.render('home',{product:productFind});
} 

const homePage = async(req,res)=>{
	readProduct(req,res);
}

const addProduct = async(req,res)=>{
	const {name, price, description, quantity, productType} = req.body;

	const existProduct = await product.findOne({name:name});
	if(existProduct){
		console.log('Product already exists');
		readProduct(req,res);
	}
	else{
		const productAdd = await new product({name, price, description, quantity, productType});

		const saveP = productAdd.save();
		if(saveP){
			console.log('product added');
			readProduct(req,res);
		}
		else{
			console.log('product couldnt be added')
			readProduct(req,res);
		}
	}
		
} 

// update product quantity
const updateProduct = async(req,res)=>{
	const productId = req.body.productId;
	const quantity = req.body.quantity;
	const productUpdate = await product.findByIdAndUpdate({_id:productId},{$set:{quantity:quantity}})
	if(productUpdate){
		console.log('product updated');
		readProduct(req,res);
	} 
	else{
		console.log('product couldnt be updated')
		readProduct(req,res);
	}
} 

//delete product by id
const deleteProduct = async(req,res)=>{
	const productId = req.body.productId;
	
	const productDelete = await product.findByIdAndDelete({_id:productId})
	if(productDelete){
		console.log('product deleted');
		readProduct(req,res);
	}
	else{
		console.log('product couldnt be deleted')
		readProduct(req,res);
	}
}


const sort = async(req,res)=>{
	const productData = await product.find();
	productData.sort((a,b) => b.price - a.price);
	res.render('home',{product:productData});
}

const search = async(req,res)=>{
	const val = req.body.searchValue;
	const productData = await product.find({"$or":[
                    {"name":val},
                    {"description":val}
                ]})
	res.render('home',{product:productData});
}

const stockOut = async(req,res)=>{
	const productData = await product.find();
	const productFilter = productData.filter(productFilter => productFilter.quantity<5)
	res.render('home',{product:productFilter});
}

module.exports = {
	homePage,
	addProduct,
	readProduct,
	updateProduct,
	deleteProduct,
	sort,
	search,
	stockOut
}
