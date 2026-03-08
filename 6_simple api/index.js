const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify({name:'bishwa',age:'21',contact:"123456779"}));
    res.end();
}).listen(5000)

// An API (Application Programming Interface) is a set of rules and protocols that allow different software programs to communicate with each other and exchange data. It acts as an intermediary or a "messenger," taking requests from one application (the client) to another application (the server) and delivering a response, without the developer needing to know the internal workings of the other system