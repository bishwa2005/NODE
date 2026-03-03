// apllication level middleware sare routes jitne bhi present hai un sab par apply ho jata tha

// lekin route-level middleware sirf selected routes pe hi apply hota hai

const express = require("express");
const app = express();

app.listen("2000");

const reqFilter=(req,res,next)=>{
    // apn yaha ek aisa middleware design kar rhe hai
    // for eg : localhost:4000/users?age=10

    if(!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        console.log(req.query.age);
        res.send("you can't access this page")
    }
    else next(); 
}

// app.use agr use kar lenge to saare routes pe middleware activate ho jayega 
// app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("this is home page");
})

// jaha jis route par middleware ki jarurat hai to usi route pe middleware call kar do
app.get('/check',reqFilter,(req,res)=>{
    res.send("your age is : "+ req.query.age)
})