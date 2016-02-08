var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'view/home.html',
        controller: 'homeController'
    }).
    when('/result', {
        templateUrl: 'view/result.html',
        controller: 'resultController'
    }).
    when('/checkout', {
        templateUrl: 'view/checkout.html',
        controller: 'checkoutController'
    })
    $locationProvider.html5Mode(true);
}]);
