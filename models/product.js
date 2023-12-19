const mongoose=require('mongoose');

//product schema
const productSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    }
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;