app.factory('lunchBoxService', function ($rootScope) {

    var service = {};

    service.sendLunchBox = function (lunchBox) {
        console.log('Register lunch box for ' + lunchBox.who + ' with ' + lunchBox.what + ' at ' + lunchBox.when);
    }

    return service;

});