app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/views/lunchBox.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);