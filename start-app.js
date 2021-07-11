const experss=require('express');
const startApp=experss();
const ContactRoute=require('./routes/contact');

    
startApp.use('/contact',ContactRoute);

startApp.use((req,res,next)=>{
    res.status(200).json({
        message:'app is runnnig'
    })
})
// startApp.use((req,res,next)=>{
//     res.status(404).json({
//         error:'Bad Request on my'
//     })
// })
module.exports=startApp;
