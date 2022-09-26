
// this index.js is the entry point of all routes.

const express=require('express');
const router=express.Router();

// we need to export this index.js which is in the route folder that we cn call or use this page in the main index.js
module.exports=router;





/////// file accessing

// so here we have to access the file home_controller.js file which is in the folder controller
const homeController=require('../controllers/home_controller');

/////// function accessing


// now we have to access the function of the page home_controller present in the controller filder.
router.get('/',homeController.home);


// as this index.js of routes folder is exported and imported in the main index.js so this page is the main router and we hove to import all the controllers in this page so that all the controllers can be accessable in the main index.js,  

// so any further routes, access from here.
// router.use('/routername', require('/routerfile'));


router.use('/users',require('./users'));








//to check whether this page is loaded or not
console.log("****Router is loaded****");
