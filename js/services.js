myApp.factory('searchQuery', ['$http', function($http) {
    var search = function(data) {
        var config = {
            url: 'list/list.json',
            method: 'GET'
        };

        var list,
            searchResult = [];

        return $http(config).then(function(response) {
            list = response.data;
            for (i = 0; i < list.length; i++) {
                if (list[i].title.indexOf(data) > -1) {
                    searchResult.push(list[i]);
                }
            }
            return searchResult;
        }, function() {
            console.log('Error occured when getting json file');
        });
    };

    return search;
}]);

myApp.factory('createMarker', function() {
    var createMarker = function(info, scope) {

        var marker = new google.maps.Marker({
            map: scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.title
        });
        var content = '<div class="infoWindowContent">' + info.desc + '</div>';
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        marker.addListener('click', function() {
            infoWindow.open(scope.map, marker);
        });
        scope.markers.push(marker);

    };

    return createMarker;
});
