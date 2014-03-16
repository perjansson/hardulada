app.factory('lunchBoxService', function ($rootScope, $timeout) {

    var service = {};

    service.sendLunchBox = function (lunchBox) {
        console.log('Register lunch box for ' + lunchBox.who + ' with ' + lunchBox.what + ' at ' + lunchBox.when);
        lunchBox.$save();
        $timeout(function () {
            $rootScope.$emit('lunch box added event');
        }, 1000);
    }

    return service;

});