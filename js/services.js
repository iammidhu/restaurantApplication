myApp.factory('mapUtils', function() {
    return {
        initMap: function() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        },

        // place a marker
        setMarker: function(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array

            google.maps.event.addListener(marker, 'click', function() {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
    }
});




myApp.factory('submitData',function() {
    return function(data,scope) {
        scope.datas.push(data);
    }
});
