// this index.js is the entry point of all routes.

const express=require('express');
const router=express.Router();


// we need to export this index.js which is in the route folder that we cn call or use this page in the main index.js
module.exports=router;


//to check whether this page is loaded or not
console.log("****Router is loaded****");




// so here we have to access the filr home_controller.js file which is in the folder controller
const homeController=require('../controllers/home_controller');


// now we have to access the function of the page home_controller present in the controller filder.
router.get('/',homeController.home);

