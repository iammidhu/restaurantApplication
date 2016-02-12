myApp.controller('checkoutController', ['$scope', 'checkoutData', function($scope, checkoutData) {
    //Here the summary of the order is displayed along with a select payment option.
    var next = checkoutData;
    var data = next.get();
    $scope.info = data;
}]);
