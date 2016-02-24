myApp.controller('homeController', ['$scope', '$location', '$routeParams', 'searchQuery', 'createMarker', 'sharedData', function($scope, $location, $routeParams, searchQuery, createMarker, sharedData) {

  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(25, 80),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  $scope.markers = [];
  $resultList = [];
  var cuisine = [
    "North Indian",
    "South Indian",
    "Biriyani",
    "Chineese",
    "Desserts",
    "Snacks",
    "Cakes",
    "Italian",
    "Sandwiches",
    "Pizza",
    "Salads",
    "Burgers",
    "Juice",
    "Beverages",
  ];
  $scope.filterData = [];
  $scope.filters = cuisine;
  $scope.filterCuisine = function(filter) {

    if ($scope.filterData.indexOf(filter) > -1) {
      var index = $scope.filterData.indexOf(filter);
      $scope.filterData.splice(index, 1);
    } else {
      $scope.filterData.push(filter);
    }
  };
  $scope.submit = function(data) {
    dataPromise = searchQuery(data);
    $scope.markers = [];
    dataPromise.then(function(result) {
      $scope.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
      $scope.resultList = result;
      var bounds = new google.maps.LatLngBounds();
      for (i = 0; i < $scope.resultList.length; i++) {
        createMarker($scope.resultList[i], $scope);
        bounds.extend($scope.markers[i].getPosition());
      }
      if ($scope.resultList.length > 0) {
        $scope.map.fitBounds(bounds);
        document.getElementById('map_canvas').style.display = "block";
        document.querySelector('.error').style.display = "none";
        document.querySelector('.filterContents').style.display = "block";
        if ($scope.resultList.length == 1) {
          $scope.map.setZoom(17);
        }
        if ($scope.resultList.length > 2) {
          document.querySelector('.search-result-list ul').style.overflowY = "scroll";
        } else {
          document.querySelector('.search-result-list ul').style.overflowY = "visible";
        }
      } else {
        $scope.errorMsg = "Nothing found";
        document.getElementById('map_canvas').style.display = "none";
        document.querySelector('.filterContents').style.display = "none";
        document.querySelector('.error').style.display = "block";
      }
    });
  };


  if ($routeParams.query) {
    $scope.searchModel = $routeParams.query;
    $scope.submit($scope.searchModel);
  }
  $scope.nextScreen = function(data) {
    var next = sharedData;
    next.set(data);
    $location.path('/result');
  }
}]);
