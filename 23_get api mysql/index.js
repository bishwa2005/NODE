const express = require("express");
const app=express();
const con=require("./config");

app.get("/",(req,res)=>{
    res.send("routing done");
})

app.get("/data",(req,res)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            res.send(err.message);
        }
        else{
            res.send(result);
        }
    });
    // res.send();
})

app.listen(5000);