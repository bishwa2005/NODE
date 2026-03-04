// In Node.js, an event is a signal that a specific action or state change has occurred, and the EventEmitter is a class that allows objects to work with this event system. This mechanism is central to Node.js's non-blocking, event-driven architecture, enabling objects to communicate asynchronously. 


// yaha par apn ek aisa event listerner bna rhe jo no of route api hit ko count kare

const express = require('express');
const EventEmitter = require('events');
// here EventEmitter is not a variable rather it is a class
const app = express();

const event = new EventEmitter();

event.on("countAPI",()=>{
    console.log("event called")
})

app.get("/",(req,res)=>{
    res.send("api called");
    console.log("home page");
    event.emit("countAPI");
});

app.get("/search",(req,res)=>{
    res.send("search api called");
});

app.get("/update",(req,res)=>{
    res.send("update api called");
});


app.listen(4000);