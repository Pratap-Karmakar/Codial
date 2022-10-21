
// this index.js is the entry point of all routes.

const express=require('express');
const router=express.Router();


// we need to export this users.js which is in the route folder that we can call or use this page in the main index.js
module.exports=router;



/////// file accessing

// so here we have to access the file home_controller.js file which is in the folder controller

const usersController=require('../controllers/users_controller');



/////// function accessing

// now we have to access the function of the page home_controller which is present in the controller folder.

router.get('/profile',usersController.profile);




// now we have to access the function of the page user_controller which is present in the controller folder.

router.get('/sign-up', usersController.signUp);

// now we have to access the function of the page user_controller which is present in the controller folder.

router.get('/sign-in', usersController.signIn);





router.post('/create', usersController.create);

router.post('/create-session',usersController.createSession);
