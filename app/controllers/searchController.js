myApp.controller('searchController', ['$scope', '$location', function($scope, $location) {
  $scope.submitHome = function(data) {
    if(data) {
      
      // var next = sharedData;
      // next.set(data);
      $location.path('/search/'+data);
    } else {
      alert('Type something');
    }
  };
}]);
