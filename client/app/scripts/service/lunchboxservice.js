app.factory('lunchBoxService', function ($rootScope) {

    var service = {};

    service.sendLunchBox = function (lunchBox) {
        console.log('Register lunch box for ' + lunchBox.who + ' with ' + lunchBox.what + ' at ' + lunchBox.when);
        var lunchBoxFromBackendFake = {
            who: lunchBox.who,
            what: lunchBox.what,
            when: lunchBox.when
        }
        $rootScope.$emit('lunch box added event', lunchBoxFromBackendFake);
    }

    return service;

});