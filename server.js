var express = require('express');
var app = express();
var path = require('path');
var port = require('port');


app.use(express.static('./resources/bootstrap/js'));
app.use(express.static('./resources/bootstrap/css'));
app.use(express.static('./resources/stylesheets'));
app.use(express.static('./resources/js'));
app.use(express.static('./resources/image'));


app.get('/',function(request,respone){
    respone.sendFile(path.join(__dirname+"/views/index.html"));
});

app.get('/resume',function(request,response){
    alert('Resume');
});


app.listen(2500||process.env.PORT);