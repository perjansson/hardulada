app.controller('RegisterLunchBoxCtrl', function ($rootScope, $scope, lunchBoxService, LunchBox) {

    var notValidLunchBox = function () {
        return isEmpty($scope.lunchBox.who) || isEmpty($scope.lunchBox.what) || isEmpty($scope.lunchBox.where) || isEmpty($scope.lunchBox.when);
    }

    function isEmpty(property) {
        return property === undefined || property === null || property === "";
    }

    var registerLunchBox = function () {
        parseWhereTags();
        lunchBoxService.sendLunchBox($scope.lunchBox);
        $scope.lunchBox = new LunchBox();
        // Hack to close modal window, don't know why data-dismiss attribute to button don't close modal window
        $('#register-lunchbox-modal').modal('hide');
    }

    function parseWhereTags() {
        $scope.lunchBox.where = $scope.lunchBox.where.split(' ');
    }

    $scope.lunchBox = new LunchBox();
    $scope.notValidLunchBox = notValidLunchBox;
    $scope.registerLunchBox = registerLunchBox;

});