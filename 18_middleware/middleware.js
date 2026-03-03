// In Node.js, middleware functions are code that execute during the application's request-response cycle. They act as an intermediary layer between the client's request and the server's final response, allowing developers to perform operations on the request and response objects before passing control to the next function in the sequence

const express = require("express")
const app = express();


// ye ek application level middleware ka type hai jo sare routes pe lag jata hai
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

app.use(reqFilter);

app.listen("4000");

app.get('',(req,res)=>{
    res.send("home page");
})

app.get('/users',(req,res)=>{
    res.send("user page");
})
