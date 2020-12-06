var express=require('express');
var app=express();
const db=require('./mdb');

//app.use(express)

app.get('/',(req,res)=>{     
     res.setHeader('Content-Type','text/html');
    res.status(200).send("hello express");
});

app.get('/product/:id/:name',(req,res)=>{
    res.status(200);
    res.setHeader('Content-Type','text/html');
    res.send(req.params)

});


/* Wildcard handler */
app.get('/**',(req,res)=>{
    res.status(404);
    res.setHeader('Content-Type','text/html');
    res.send("404 : page not found");
});

app.listen(3000,()=>{
    console.log(`server running at http://127.0.0.1:${3000}`)
});