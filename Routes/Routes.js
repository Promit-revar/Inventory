const express=require('express');
const app=express();
app.use(express.json());                        
app.use(express.urlencoded({extended:true}));
const func=require('../Controllers/RegisterandLoginController.js');
app.get('/',(req,res)=>{
    res.send("<h1>Hello World!</h1>");
});
app.post('/register',(req,res)=>{
    
    func.Reg(req.body,res);
   
});
app.post('/login',(req,res)=>{
    
    func.login(req.body,res);
    
});
module.exports=app;