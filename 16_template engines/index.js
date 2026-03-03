// template engines are used to make dynamic pages
// eg : ejs

// jab apn pura ka pura html file hi load kar dete the to wo static pages kehlati hai

// lekin agr hum koi aisa data load karwate hai jo frequently change hote rehti hai jaise databse se data fetch karna to wo dynamic page ban jati hai

const express = require('express');
const app = express();
const path = require('path');

app.listen(4000);

const publicpath = path.join(__dirname,'public');

// ejs use karne se pehle declare karna hota hai
app.set('view engine','ejs');

// view folder banana jaruri hai template engine use karte samay
app.get('/profile',(req,res)=>{
    const user={
        name:"bishwa ranjan",
        email:"abc@gmail.com",
        city:"noida"
    }
    res.render('profile',{user}); //sending user object as a data to profile page
})

app.get('/',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);  
})

app.get('/sample',(req,res)=>{
    
    res.sendFile(`${publicpath}/sample.html`)
})



app.get('/about',(req,res)=>{
   
    res.sendFile(`${publicpath}/sample.html`)
})



app.use((req,res)=>{
    res.sendFile(`${publicpath}/404_page.html`)
})

