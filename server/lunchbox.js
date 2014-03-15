var mongoose = require("mongoose");

var LunchBox = mongoose.model("LunchBox", {
    who: String,
    what: String,
    when: Date,
    where: [String]
});
module.exports.LunchBox = LunchBox;

var createLunchBox = function(who, what, when, where){
    var lunchBox = new LunchBox();
    lunchBox.who = who;
    lunchBox.what = what;
    lunchBox.when = when;
    lunchBox.where = where;
    return lunchBox;
};
module.exports.createLunchBox = createLunchBox;