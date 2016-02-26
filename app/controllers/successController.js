myApp.controller('successController', ['$scope', '$location', 'finalData', function($scope, $location, finalData) {

  var next = finalData;
  var orderData = next.get();

  $scope.total = orderData.data.total;

  $scope.delivery_type = orderData.delivery.name;
  $scope.showVariable = true;

  if ($scope.delivery_type == 'pickup') {
    $scope.showVariable = false;
  } else {
    $scope.showVariable = true;
  }
}]);
