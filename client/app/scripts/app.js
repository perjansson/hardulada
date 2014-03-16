var app = angular.module('GotLunchBoxApp', ['ngResource']);

app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:5000//**', 'localhost:5000/**']);

}])