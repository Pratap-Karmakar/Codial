// this index.js is the entry point of all routes.

const express=require('express');
const router=express.Router();


// we need to export this index.js which is in the route folder that we cn call or use this page in the main index.js
module.exports=router;


//to check whether this page is loaded or not
console.log("****Router is loaded****")