const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify({name:'bishwa',age:'21',contact:"123456779"}));
    res.end();
}).listen(5000)