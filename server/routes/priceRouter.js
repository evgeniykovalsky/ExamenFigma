const Router=require('express');
const router=new Router();
const priceController=require('../controllers/priceController');

router.post('/',priceController.create);
router.get('/',priceController.getAll);




module.exports=router;