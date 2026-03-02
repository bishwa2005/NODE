// yaha apn ye seekhenge ki extension kaise remove kare?

// localhost:4000/about.html  ->  localhost:4000/about

// aisa karna isiliye jarurui hai kyuki hum user ko ye nai batana chate hai ki humari page konsi technology par bani hai like php/html
// aise karna security ke liye bhi imp hai

const express = require('express');
const app = express();
const path = require('path');

app.listen(4000);

const publicpath = path.join(__dirname,'public');

app.get('/',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);  // it will fetch the about page from the public folder
})

app.get('/sample',(req,res)=>{
    // http://localhost:4000/sample now upon hitting this url it will automatically send sample.html file
    res.sendFile(`${publicpath}/sample.html`)
})


// ab kisi aur url par koi aur page render karna chahe to?
app.get('/about',(req,res)=>{
    // http://localhost:4000/about now upon hitting this url it will automatically send sample.html file 🤣
    res.sendFile(`${publicpath}/sample.html`)
})


// ab agr aisa koi page ka url hit kar jaye jo bne nai to jaise "/contact"
app.use((req,res)=>{
    res.sendFile(`${publicpath}/404_page.html`)
})