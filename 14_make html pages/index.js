const express = require('express')
const app = express();
const path = require('path');

app.listen(5000);

console.log(__dirname);
const publicpath=path.join(__dirname,'public');

// express.static is used to load static html pages 
app.use(express.static(publicpath));

// page is available at localhost:5000/about.html
