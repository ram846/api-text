const express= require('express');
const app=express();
app.get('/', function(req,res){
    res.send("nishant")
}).listen(4000, function(){
    console.log("start run node!")
});