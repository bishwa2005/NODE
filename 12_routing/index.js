// req aur res hota kya hai actually?

// req=request ye client bhejta hai agr ye pehle se defined nai hai to pura ka pura response return ho jata

// res=response ye wo parameter hai jo kisi request hone par hi output deta hai

const express = require('express');
const app = express();

app.listen(3000);

app.get('',(req,res)=>{
    res.send("this is response");
    // yaha apn alg se koi req parameter nai de rhe iska matlab pure ke pure page ke liye response same hi rhega
})