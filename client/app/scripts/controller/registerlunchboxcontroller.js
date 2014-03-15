app.controller('RegisterLunchBoxCtrl', function ($rootScope, $scope, lunchBoxService, LunchBox) {

    var registerLunchBox = function () {
        lunchBoxService.sendLunchBox($scope.lunchBox);
        $scope.lunchBox = new LunchBox(anEmptyLunchBox());
    }

    $scope.lunchBox = new LunchBox(anEmptyLunchBox());
    $scope.registerLunchBox = registerLunchBox;

});