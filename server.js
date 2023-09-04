var express = require('express');
var app = new express();

app.listen(8080,()=>{
    console.log("App started");
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname + "/style.css");
});

app.get('/app.js',(req,res)=>{
    res.sendFile(__dirname + "/app.js");
});

app.use('/images', express.static('images')); 