myApp.controller('homeController', ['$scope', 'searchQuery', function($scope, searchQuery) {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    $scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    $scope.markers = [];
    $resultList = [];
    $scope.submit = function(data) {
        $resultList = searchQuery(data);
        for (i = 0; i < $resultList.length; i++) {
            createMarker($resultList[i]);
        }
    }

    var createMarker = function(info) {
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }
}]);

myApp.controller('resultController', ['$scope', function($scope) {

}]);

myApp.controller('checkoutController', ['$scope', function($scope) {

}]);
