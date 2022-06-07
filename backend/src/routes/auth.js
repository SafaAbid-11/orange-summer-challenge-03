const express=require('express');
const router=express.Router();
const auth=require('../middlewares/verify-token')
const authCtrl=require('../controllers/AuthController')
 
router.get('/',authCtrl.getAllUser);
//router.post('/', auth,authCtrl.createUser);
router.get('/:id', auth,authCtrl.getOneUser);
router.put('/:id', auth,authCtrl.modifyUser);
router.delete('/:id',auth, authCtrl.deleteUser);

router.post('/signup',authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;
