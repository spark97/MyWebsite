var express = require('express');
var app = express();
var path = require('path');
//var port = require('port');


app.use(express.static('./resources/bootstrap/js'));
app.use(express.static('./resources/bootstrap/css'));
app.use(express.static('./resources/stylesheets'));
app.use(express.static('./resources/js'));
app.use(express.static('./resources/image'));
app.use(express.static('./resources/files'));


app.get('/',function(request,respone){
    respone.sendFile(path.join(__dirname+"/views/index.html"));
});

app.get('/resume',function(request,response){
    response.sendFile(path.join(__dirname+"/resources/files/resume.pdf"));
});

var port = process.env.port || 3000;

app.listen(port);
//app.listen(2500||process.env.PORT);