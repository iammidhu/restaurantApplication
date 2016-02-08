myApp.controller('homeController', ['$scope', function($scope) {

}]);

myApp.controller('resultController', ['$scope', 'submitData', function($scope, submitData) {

}]);

myApp.controller('checkoutController', ['$scope', function($scope) {

}]);

myApp.controller('mapController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.map;
    $scope.markers = [];
    $timeout(function() {
        var latLng = new google.maps.LatLng(35,139);
        var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        $scope.overlay = new google.maps.OverlayView();
        $scope.overlay.draw = function() {}; // empty function required
        $scope.overlay.setMap($scope.map);
    },1001)
}]);
