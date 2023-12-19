const express=require('express');
const router=express.Router();
const productsController = require('../../controllers/api/products');

//create request //post
router.post('/create',productsController.createProduct);

//read request (show json) //get
router.get('/',productsController.getProducts);

//delete request //delete
router.delete('/:id',productsController.deleteProduct);

//update request //post
router.post('/:id/update_quantity',productsController.updateProductQuantity);

module.exports=router;