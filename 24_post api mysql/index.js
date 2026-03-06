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

app.post("/",(req,res)=>{
    const data = {"username":"pparker","email":"peter@midtown.edu","password":"$2y$10$Z3xV5c7B8"}
    con.query("insert into users values", data, (error,result,fields)=>{
        if(error){
            throw error;
        }
        res.send(result);
    })

})

app.listen(5000);