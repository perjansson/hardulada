var repo = require(__dirname + '/lunchboxrepository.js');
var model = require(__dirname + '/lunchbox.js');

var startForApp = function (app) {
    repo.connectToDb("mongodb://perjansson:jagharlada@oceanic.mongohq.com:10016/app23023996");
    app.get('/api', function (req, res) {
        console.log("Get /api");
        res.send('Lunchboxes API is running');
    });

    app.get('/api/lunchboxes', function (req, res) {
        console.log("Get /api/lunchboxes");
        return repo.findAllLunchBoxes(function (err, lunchBoxes) {
            if (err) {
                return console.log(err);
            } else {
                return res.send(lunchBoxes);
            }
        });
    });

    app.post('/api/lunchboxes', function (req, res) {
        var savedLunchBox = null;
        console.log("Post /api/lunchboxes: ");
        var reqBody = req.body
        console.log(reqBody);
        repo.saveLunchBox(reqBody, function (err, lunchBox) {
            savedLunchBox = lunchBox;
            if (err) {
                console.log("Error saving lunch box: " + JSON.stringify(err));
            } else {
                console.log("Saved lunch box: " + JSON.stringify(lunchBox));
            }
        });
        return res.send(savedLunchBox);
    });
}
module.exports.startForApp = startForApp;


/*
 repo.saveLunchBox({who: 'Per', what: 'Lasagne', when: new Date(), where: ['Aptitud', 'Nordea']}, function (err, lunchBox) {
 if (err) {
 console.log("Error saving lunch box: " + JSON.stringify(err));
 } else {
 console.log("Saved lunch box: " + JSON.stringify(lunchBox));
 }
 });
 repo.findAllLunchBoxes(function(lunchBoxes) {
 console.log("Found " + lunchBoxes.length + " lunch box(es): " + JSON.stringify(lunchBoxes));
 });
 */