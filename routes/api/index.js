const express=require('express');
const router=express.Router();


//products
router.use('/products',require('./products'));

module.exports=router;