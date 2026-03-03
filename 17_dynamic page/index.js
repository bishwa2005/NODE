// in this lecture we will be learning about adding common header to the files

const express = require('express');
const app = express();


app.listen(4000);


// ejs use karne se pehle declare karna hota hai
app.set('view engine','ejs');

// view folder banana jaruri hai template engine use karte samay
app.get('/profile',(req,res)=>{
    const user={
        name:"bishwa ranjan",
        email:"abc@gmail.com",
        city:"noida",
        skills:['php','js','python']  //here we are learning how to apply loops in ejs
    }
    res.render('profile',{user}); //sending user object as a data to profile page
})

app.get('/login',(req,res)=>{
    res.render('login');
})
