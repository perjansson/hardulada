app.controller('ViewLunchBoxesCtrl', function ($rootScope, $scope) {

    var lunchBoxes = [];

    var deRegLunchBoxAddedEvent = $rootScope.$on('lunch box added event', function (event, lunchBox) {
        lunchBoxAdded(lunchBox);
    });

    function lunchBoxAdded(lunchBox) {
        lunchBoxes.push(lunchBox);
    }

    $scope.lunchBoxes = lunchBoxes;

    $scope.$on('$destroy', function () {
        deRegLunchBoxAddedEvent();
    });

});