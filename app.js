var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/partials/home.html',
        controller: 'homeController'
    }).
    when('/result', {
        templateUrl: 'app/partials/result.html',
        controller: 'infoController'
    }).
    when('/checkout', {
        templateUrl: 'app/partials/checkout.html',
        controller: 'checkoutController'
    })
    $locationProvider.html5Mode(true);
}]);
