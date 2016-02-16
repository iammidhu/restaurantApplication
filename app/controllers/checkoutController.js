myApp.controller('checkoutController', ['$scope', 'checkoutData', function($scope, checkoutData) {
    //Here the summary of the order is displayed along with a select payment option.
    var next = checkoutData;
    var data = next.get();
    $scope.info = data;
    $scope.deleteRow = function(index) {
        $scope.info.total -= $scope.info.review[index].total;
        $scope.info.review.splice(index, 1);
    }
    $scope.change = function(index, changeCount, $event) {
        $scope.info.total -= $scope.info.review[index].total;
        $scope.info.review[index].total = changeCount * $scope.info.review[index].pricePerItem;
        $scope.info.total += $scope.info.review[index].total;
    }
}]);
