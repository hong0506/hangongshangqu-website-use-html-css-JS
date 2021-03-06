const express=require('express');
const path=require('path');

const app=express();

const publicDirectory=path.join("_dbname",'./public');

app.use(express.static(publicDirectory));
app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render('home',{name:'John'});
})

app.get("/contact",(req,res)=>{
    res.send('welcome to my page');
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})