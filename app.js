const express= require('express');
const app=express();
app.get('/', function(req,res){
    res.send("nis raj")
}).listen(4000);