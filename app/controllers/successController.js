myApp.controller('successController', ['$scope', '$location', 'finalData', function($scope, $location, finalData) {

      var next = finalData;
      var orderData = next.get();

      $scope.total = orderData.data.total;
    }]);
