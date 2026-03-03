// yaha apn midlleware ko separate file mein rakh kar use karna seekhenge

const express = require("express");
const app = express();

// yaha se apn middleware wali file ko import kar rhe hai
const reqFilter = require('./middleware')

app.listen("2000");



app.get('',(req,res)=>{
    res.send("this is home page");
})

// jaha jis route par middleware ki jarurat hai to usi route pe middleware call kar do
app.get('/check',reqFilter,(req,res)=>{
    res.send("your age is : "+ req.query.age)
})