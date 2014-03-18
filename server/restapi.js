var repo = require(__dirname + '/lunchboxrepository.js');

var startForApp = function (express, server, app) {
    repo.connectToDb("mongodb://perjansson:jagharlada@oceanic.mongohq.com:10016/app23023996");

    app.configure(function () {
        app.use(express.json());
        app.use(express.urlencoded());
        app.use("/", express.static(__dirname + '/../client'));
    });

    var port = Number(process.env.PORT || 5000);
    server.listen(port);

    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/../client/index.html');
    });

    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, POST", "PUT");
        next();

    });

    var getApi = function (req, res) {
        console.log("Get /api");
        res.send('Lunchboxes API is running');
    };

    var findAllLunchBoxes = function (req, res) {
        console.log("Get /api/lunchboxes");
        return repo.findAllLunchBoxes(function (err, lunchBoxes) {
            if (err) {
                return console.log(err);
            } else {
                return res.send(lunchBoxes);
            }
        });
    };

    var addLunchBox = function (req, res) {
        var savedLunchBox = null;
        console.log("Post /api/lunchboxes: " + reqBody);
        var reqBody = req.body;
        repo.saveLunchBox(reqBody, function (err, lunchBox) {
            savedLunchBox = lunchBox;
            if (err) {
                console.log("Error saving lunch box: " + JSON.stringify(err));
            } else {
                console.log("Saved lunch box");
            }
            return res.send(savedLunchBox);
        });
    };

    app.get('/api', getApi);
    app.get('/api/lunchboxes', findAllLunchBoxes);
    app.post('/api/lunchboxes', addLunchBox);
}
module.exports.startForApp = startForApp;
