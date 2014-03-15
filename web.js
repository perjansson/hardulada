var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    restApi = require(__dirname + '/server/restapi.js')

var port = Number(process.env.PORT || 5000);
server.listen(port);

app.use("/", express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/index.html');
});

restApi.startForApp(app);