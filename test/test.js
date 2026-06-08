const express = require('express');
const app = express();

app.listen(4000);

app.get('',(req,res)=>{
    res.send("home page");
})

app.get('/contact',(req,res)=>{
    res.send("contact page");
})