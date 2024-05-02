const express = require('express');
const router = express.Router();
const {getProducts,getASingleProduct,updateProduct,createProduct} = require('../controllers/product.controller.js')

router.get('/',getProducts);
router.get('/:id',getASingleProduct)
router.put('/:id',updateProduct)
router.post('/',createProduct)


module.exports = router;