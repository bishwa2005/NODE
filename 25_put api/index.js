// put api is used to update the data in database

// agr method alag hai jaise (put ,get) then also wo same route pe kaam kar jate hai

const express = require("express");
const app = express();
const con = require("./config");

app.get("/",(req,res)=>{
    res.send("routing done");
})

// for static update
app.put("/",(req,res)=>{
    const data = ["tony","abc@gmail.com",1]
    con.query("UPDATE USERS SET USERNAME = ?,EMAIL = ? WHERE ID = ?",data,(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    })
    res.send("update api working")
})


// for dynamic update
app.put("/:id",(req,res)=>{
    const data = ["ton","abc@gmail.com",req.params.id]
    con.query("UPDATE USERS SET USERNAME = ?,EMAIL = ? WHERE ID = ?",data,(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    })
    res.send("update api working")
})

app.listen(4000);