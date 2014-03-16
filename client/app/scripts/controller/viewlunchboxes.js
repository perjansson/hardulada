app.controller('ViewLunchBoxesCtrl', function ($rootScope, $scope, LunchBox) {

    var deRegLunchBoxAddedEvent = $rootScope.$on('lunch box added event', function (event) {
        findAllLunchBoxes();
    });

    var findAllLunchBoxes = function () {
        LunchBox.query(function (lunchBoxes) {
            $scope.lunchBoxes = lunchBoxes;
        }, function (errResponse) {
            console.log("Fail!");
        });
    }

    findAllLunchBoxes();

    $scope.$on('$destroy', function () {
        deRegLunchBoxAddedEvent();
    });

});