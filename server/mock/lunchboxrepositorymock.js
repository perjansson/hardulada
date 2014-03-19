var lunchBoxes = [
    {
        who: 'Per Jansson',
        what: 'Lasagne',
        when: new Date(),
        where: ['Nordea', 'Hötorget']
    },
    {
        who: 'John Doe',
        what: 'Flygande Jacob',
        when: new Date(),
        where: ['Aptitud']
    }
];

var connectToDb = function (connectionString) {
    // Do nothing
};
module.exports.connectToDb = connectToDb

var saveLunchBox = function (lunchBoxToSave, callback) {
    lunchBoxes.push(lunchBoxToSave);
    return callback(null, lunchBoxToSave);
};
module.exports.saveLunchBox = saveLunchBox;

var findAllLunchBoxes = function (callback) {
    return callback(null, lunchBoxes);
};
module.exports.findAllLunchBoxes = findAllLunchBoxes;
