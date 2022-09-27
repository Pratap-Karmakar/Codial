const express=require('express');
const router=express.Router();


module.exports=router;

const postController=require('../controllers/post_controller');

router.get('/post',postController.post);