myApp.controller('homeController', ['$scope', 'searchQuery', 'createMarker', function($scope, searchQuery, createMarker) {

    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.markers = [];
    $resultList = [];
    $scope.submit = function(data) {
        dataPromise = searchQuery(data);
        dataPromise.then(function(result) {
            $scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
            $scope.resultList = result;
            for (i = 0; i < $scope.resultList.length; i++) {
                createMarker($scope.resultList[i], $scope);
            }
            var center = new google.maps.LatLng(result[0].lat, result[0].long);
            $scope.map.setCenter(center);
        });

    }
}]);

myApp.controller('resultController', ['$scope', function($scope) {

}]);

myApp.controller('checkoutController', ['$scope', function($scope) {

}]);
