//product schema
const Product=require('../../models/product');



//for creating a product
module.exports.createProduct=async function(req,res){
    try{
        //console.log(req.body);
        const product=await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });

        return res.status(201).json({
            data:{
                product:product,
                message:"Product added successfully"
            }
        })
    }catch(err){
        console.log("Error creating a Product ",err);
        return res.status(500).json({
            data:{
                message:"Error adding the product"
            }
        });
    }
};


//for fetching the products
module.exports.getProducts= async function(req,res){
    try{
        //getting all the products as an array
        const products= await Product.find();
        return res.status(200).json({
            data:{
                products:products,
                message:"Products fetched successfully"
            }
        });
    
    }catch(err){
        console.log("Error fetching products ",err);
        return res.status(500).json({
            data:{
                message:"Error getting the products list"
            }
        });
    }
};




//for deleting the products
module.exports.deleteProduct=async function(req,res){
    try{
       // console.log(req.params);
       const productId=req.params.id;
        //if the product doesn't exist, then no nned to go further
       const product=await Product.findById(productId);
       if(product){
            await Product.findByIdAndDelete(productId);
            return res.status(200).json({
                data:{
                    message:"Product Deleted"
            }});
       }else{
        //if the product doesn't exist
            return res.status(400).json({
                data:{
                    message:"Product with the ID doesn't exist"
            }});
        }
    }catch(err){
        console.log("Error Deleting Product",err);
        return res.status(500).json({
            data:{
                message:"Error Deleting a Product"
            }
        });
    }
}



//for updating the quantity of a product
module.exports.updateProductQuantity=async function(req,res){  
    // console.log(req.params);
    // console.log(req.query);
    const number=req.query.number;
    const productId=req.params.id;
    try{
         const updatedProduct=await Product.findByIdAndUpdate(productId,{
            quantity:number
         },{new:true}); //find and update

         //if the product is not found
         if(!updatedProduct){
            return res.status(404).json({
                data:{
                    message:"Product Not Found"
                }
            })
         }else{
            return res.status(200).json({
                data:{
                    message:"Product Updated Succesfully"
                }
            })
         }
    }catch(err){
        console.log("Error updating the product");
        return res.status(500).json({
         data:{
            message:"Error updating the product"
        }});
    }
}