myApp.controller('homeController', ['$scope', 'searchQuery', 'createMarker', 'sharedData', function($scope, searchQuery, createMarker, sharedData) {

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
            var bounds = new google.maps.LatLngBound();
            for (i = 0; i < $scope.resultList.length; i++) {
                createMarker($scope.resultList[i], $scope);
                bounds.extend(markers[i].getPosition());
            }
            if($scope.resultList.length > 0) {
                $scope.map.fitBounds(bounds);
                document.getElementById('map_canvas').style.display = "block";
                document.querySelector('.error').style.display = "none"
            } else {
                $scope.errorMsg = "Nothing found";
                document.getElementById('map_canvas').style.display = "none";
                document.querySelector('.error').style.display = "block"
            }
        });
    };

    $scope.nextScreen = function(id) {
        var next = sharedData();
        next.set(id);
        $location.path = '/result';
    }
    //
}]);

myApp.controller('resultController', ['$scope', 'sharedData', function($scope, sharedData) {
    var next = sharedData();
    var id = next.get();
    //get menu json via http passing the id.
    //get about json via http passing the id.
    //two tabs: info tab and the menu tab.
    //info tab displays all the info about the restaurant.
    //the menu tab lists the menu items with a checkbox.
    //when checked, the checkout box on the right is dynamically updated.
    //when checkout is clicked, user is redirected to the checkout page.
}]);

myApp.controller('checkoutController', ['$scope', function($scope) {
    //Here the summary of the order is displayed along with a select payment option.
}]);
