var express = require('express');
var app = express();

app.use(express.static('D:/Multiply/src/app/'));
app.use('/css', express.static(__dirname + '/D:/Multiply/src/app/app.component.css'));
app.use('/html', express.static(__dirname + '/D:/Multiply/src/app/app.component.html'));
app.use('/ts', express.static(__dirname + '/D:/Multiply/src/app/app.component.ts'));
app.use('/ts', express.static(__dirname + '/D:/Multiply/src/app/app.module.ts'));
app.use('/ts', express.static(__dirname + '/D:/Multiply/src/app/app.component.spec.ts'));




var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});