const express = require('express')
const app = express();

app.listen(3000);

app.get('',(req,res)=>{
    // we can't send multiple response on single request
    res.send("<h1>hello everyone");
    res.send("<h2> welcome to home page") //this will give error
})



// how to get input from the user?
app.get('/ask',(req,res)=>{
    res.send(`
        <input type="text" placeholder="user name" />
        <button>click me</button>
        `)
})

// how to send json data?
app.get('/help',(req,res)=>{
    res.send({
        name:"bishwa",
        email:"abs@gmail.com"
    })
})




// how to send multiple json data?
// => make array for multiple data and send
app.get('/info',(req,res)=>{
    res.send([
        {
        name:"bishwa1",
        email:"abs1@gmail.com"
    },
    {
        name:"bishwa2",
        email:"abs2@gmail.com"
    }
    ])
})


// how to move from one page to another
app.get("/switch",(req,res)=>{
    res.send(`
        <a href="/info">about info</a>,
        <a href="/">about home</a>,
        <a href="/ask">about ask</a>
        `)
})

// interview ques?
// url ke parameter se value kaise mil sakta hai?