restaurantApp.controller('checkoutController', ['$scope', '$location', 'checkoutData', 'finalData', function($scope, $location, checkoutData, finalData) {
  //Here the summary of the order is displayed along with a select payment option.
  var next = checkoutData;
  var data = next.get();
  $scope.info = data;
  $scope.isDisabled = false;
  $scope.deleteRow = function(index) {
    $scope.info.total -= $scope.info.review[index].total;
    $scope.info.review.splice(index, 1);
    if ($scope.info.total == 0) {
      $scope.isDisabled = true;
    }
  }
  $scope.changeItem = function(index, changeCount, $event) {
    $scope.info.total -= $scope.info.review[index].total;
    $scope.info.review[index].total = changeCount * $scope.info.review[index].pricePerItem;
    $scope.info.total += $scope.info.review[index].total;
  }
  $scope.success = function() {
    finalData.set({
      data: $scope.info,
      delivery: $scope.delivery
    });
    $location.path('/success');
  }
  $scope.delivery = {
    name: 'delivery'
  }
}]);
