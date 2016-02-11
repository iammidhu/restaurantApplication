myApp.controller('checkoutController', ['$scope', 'sharedData', function($scope, sharedData) {
    //Here the summary of the order is displayed along with a select payment option.
    var next = sharedData;
    var data = next.get();
    $scope.info = data;
}]);
