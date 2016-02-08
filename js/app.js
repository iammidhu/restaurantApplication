var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        }).
        when('/', {
            templateUrl: 'view/result.html',
            controller: 'resultController'
        }).
        when('/checkout', {
            templateUrl: 'view/checkout.html',
            controller: 'checkoutController'
        })
        $locationProvider.html5Mode(true);
}]);

myApp.directive('myMap',['mapUtils', function(mapUtils) {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];

        // map config
        var mapOptions = {
            center: new google.maps.LatLng(50, 2),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        // init the map


        // show the map and place some markers
        mapUtils.initMap();

        mapUtils.setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
        mapUtils.setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
        mapUtils.setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
    };

    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]);
