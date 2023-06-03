const Router=require('express');
const router=new Router();
const vagaController=require('../controllers/vagaController');

router.post('/',vagaController.create);
router.get('/',vagaController.getAll);




module.exports=router;