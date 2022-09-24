const port=7000;
const express=require('express');
const app=express();



app.listen(port,function(error){
    if(error){
        console.log(`Error : ${error}`);
    }
    else{
        console.log(`Server On : ${port}`);
    }
})