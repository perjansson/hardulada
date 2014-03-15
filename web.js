var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    repo = require(__dirname + '/server/lunchboxrepository.js');

var port = Number(process.env.PORT || 5000);
server.listen(port);

app.use("/", express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/index.html');
});

repo.connectToDb("mongodb://perjansson:jagharlada@oceanic.mongohq.com:10016/app23023996");
repo.saveLunchBox({who: 'Per', what: 'Lasagne', when: new Date(), where: ['Aptitud', 'Nordea']}, function (err, lunchBox) {
    if (err) {
        console.log("Error saving lunch box: " + JSON.stringify(err));
    } else {
        //console.log("Saved lunch box: " + JSON.stringify(lunchBox));
    }
});
repo.findAllLunchBoxes(function(lunchBoxes) {
    console.log("Found " + lunchBoxes.length + " lunch box(es): " + JSON.stringify(lunchBoxes));
});