const express=require('express');
const app=express();
const path=require('path');
app.use(express.json());                        
app.use(express.urlencoded({extended:true}));
const func=require('../Controllers/RegisterandLoginController.js');
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +'/welcome.html'));
});
app.post('/register',func.Register());
app.post('/login',func.login());
module.exports=app;