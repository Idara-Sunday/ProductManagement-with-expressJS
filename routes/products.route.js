const express = require('express');
const router = express.Router();
const {getProducts,getASingleProduct,updateProduct,createProduct,deleteProduct} = require('../controllers/product.controller.js')

router.get('/',getProducts);
router.get('/:id',getASingleProduct)
router.put('/:id',updateProduct)
router.post('/',createProduct)
router.delete('/delete-product/:id',deleteProduct)


module.exports = router;