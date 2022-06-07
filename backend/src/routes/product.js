const express=require('express');
const router=express.Router();
const productCtrl=require('../controllers/productController')
 
router.get('/', productCtrl.getAllProduct);
router.post('/', productCtrl.createProduct);
router.get('/:id', productCtrl.getOneProduct);
router.put('/:id', productCtrl.modifyProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;
