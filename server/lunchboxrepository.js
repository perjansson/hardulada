mongoose = require("mongoose");

var model = require(__dirname + '/lunchbox.js');
var LunchBox = model.LunchBox;

var connectToDb = function (connectionString) {
    if (mongoose.connection.readyState === 0) { // not open
        var options = {
            server: {
                socketOptions: []
            },
            replset: {
                socketOptions: []
            }
        };
        options.server.socketOptions = options.replset.socketOptions = {
            keepAlive: 1
        };
        mongoose.connect(connectionString, options);
    }
};
module.exports.connectToDb = connectToDb

var saveLunchBox = function (lunchBoxToSave, callback) {
    var lunchBox = model.createLunchBox(lunchBoxToSave.who, lunchBoxToSave.what, lunchBoxToSave.when, lunchBoxToSave.where);

    lunchBox.save(function (err) {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, lunchBoxToSave);
        }
    });
};
module.exports.saveLunchBox = saveLunchBox;

var findAllLunchBoxes = function (callback) {
    LunchBox.find({}, function (err, documents) {
        callback(documents);
    });
};
module.exports.findAllLunchBoxes = findAllLunchBoxes;