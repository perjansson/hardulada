app.controller('RegisterLunchBoxCtrl', function ($rootScope, $scope, lunchBoxService, LunchBox) {

    var notValidLunchBox = function () {
        return isEmpty($scope.lunchBox.who) || isEmpty($scope.lunchBox.what) || isEmpty($scope.lunchBox.where) || isEmpty($scope.lunchBox.when);
    }

    function isEmpty(property) {
        return property === undefined || property === null || property === "";
    }

    var registerLunchBox = function () {
        lunchBoxService.sendLunchBox($scope.lunchBox);
        $scope.lunchBox = new LunchBox();
    }

    $scope.lunchBox = new LunchBox();
    $scope.notValidLunchBox = notValidLunchBox;
    $scope.registerLunchBox = registerLunchBox;

});