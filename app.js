const express= require('express');
const app=express();
app.get('/', function(req,res){
    res.send("nisant raj")
}).listen(4000);