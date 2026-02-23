const http=require('http');

// passing as arrow function
http.createServer((req,res)=>{
    res.write("hello world");
    res.write("bishwa")
    res.end();
}).listen(4500)