const http=require('http');

function dataControl(req,res){
    res.write("hello world ");
    res.write("bishwa")
    res.end();
}

// passing a whole major function 
http.createServer(dataControl).listen(4500)

// http module handels the requests and response