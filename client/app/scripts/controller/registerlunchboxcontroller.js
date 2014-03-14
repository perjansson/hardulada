app.controller('RegisterLunchBoxCtrl', function ($rootScope, $scope, lunchBoxService) {

    var registerLunchBox = function () {
        lunchBoxService.sendLunchBox($scope.lunchBox);
        $scope.lunchBox = aLunchBox();
    }

    $scope.lunchBox = aLunchBox();
    $scope.registerLunchBox = registerLunchBox;

});