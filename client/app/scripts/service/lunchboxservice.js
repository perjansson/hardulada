app.factory('lunchBoxService', function ($rootScope, $timeout) {

    var service = {};

    service.sendLunchBox = function (lunchBox) {
        lunchBox.$save();
        $timeout(function () {
            $rootScope.$emit('lunch box added event');
        }, 1000);
    }

    return service;

});