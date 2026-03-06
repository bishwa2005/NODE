const express = require("express");
const app = express();
const con = require("./config");

app.get("/",(req,res)=>{
    res.send("routing done");
})

app.delete("/:id",(req,res)=>{
    
    con.query("DELETE FROM USERS WHERE ID = "+req.params.id,(err,result)=>{
        if(err) throw err;
        else res.send(result);
    });
})

app.listen(4000);