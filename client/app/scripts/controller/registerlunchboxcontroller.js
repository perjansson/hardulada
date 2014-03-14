app.controller('RegisterLunchBoxCtrl', function ($rootScope, $scope, lunchBoxService) {

    var lunchBox = aLunchBox();

    var registerLunchBox = function () {
        lunchBoxService.sendLunchBox(lunchBox);
    }

    $scope.lunchBox = lunchBox;
    $scope.registerLunchBox = registerLunchBox;

});